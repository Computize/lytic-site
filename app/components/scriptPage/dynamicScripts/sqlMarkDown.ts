

/**
 * RAW SQL
 * Store Activity Monitor Data
 */
const storeActivityMonitorData = `
                        
/****************The Lytic Group, copyright, 2021*****************

****************Published March 2021 *****************

*********at http://www.lyticgroup.com by Edward Heraux*****************

******************************************************************************************/



/************************************************************************************************

At the time some important performance counter hits an undesirable threshold, or when an extreme error occurs,

we usually want to know what was going on at the time, which may have caused or contributed

to the emergency.

This script is a lightweight way to capture exactly who was connected at the time and from what applications. 

This will give you some better context surrounding the alert or performance event.

 *******************************************************************************************/





/****************WE’D LOVE YOUR FEEDBACK****************************************************************************

Shoot us an email at info@lyticgroup.com  

and connect with Ed Heraux (the script author) on LinkedIn, http://www.linkedin.com/pub/edward-heraux-pmp/1/826/730/

for announcements of all new scripts.

************************************************************************************************************************/





/*

1. uspStoreActivityMonitorData

This first stored procedure creates a table and stores the results of sp_who2, which lists the activity and some performance notes on

all connections to your SQL Server.

When things go wrong (or some time afterwards), you can query this table to analyze the context 

of when there were failures or you surpassed performance thresholds.

After the stored proc definition is a script to build a job that runs the proc, and then more scripts to create alerts that fire that job.

*/



SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO



CREATE PROC [dbo].[uspStoreActivityMonitorData]



--The account executing this proc and/or running the job that calls this proc 

--needs to have permissions to create a table, and VIEW SERVER STATE permission

--(otherwise you'll only grab the current connection's processes).

-- 'WITH EXECUTE AS OWNER'  added here just before the AS could help insure that the right account is used

-- (if you have all the correct permissions)

AS



--If it doesn't exist yet, create a table to house the results of sp_who2

IF OBJECT_ID('ActivityMonitorData') IS  NULL

CREATE TABLE ActivityMonitorData

	(SPID int

	,Status varchar(255)

	,Login sysname

	,Hostname sysname

	,BlkBy varchar(255)

	,DBName sysname NULL

	,Command varchar(MAX)

	,CPUTime varchar(255)

	,DiskIO varchar(255)

	,LastBatch varchar(255)

	,ProgramName varchar(255)

	,SPID2 varchar(255)

	,REQUESTID varchar(255)

	,SnapshotDateTime  AS CURRENT_Timestamp

	) 

	ON [PRIMARY]





--Grab all the current activity data at the moment that this proc is run

INSERT INTO ActivityMonitorData(SPID,Status,Login,HostName,BlkBy, DBName, Command,CPUTime, DiskIO, LastBatch,ProgramName, SPID2,REQUESTID)

EXEC sp_who2





--Optionally, get rid of connections that you can't associate with any actual applications,

--and any internal and background processes

DELETE ActivityMonitorData

WHERE ProgramName='' 

		OR SPID<=50





--FOR TESTING

--SELECT * FROM ActivityMonitorData

GO



/***************************************************************************************

2. Create the job and the alerts that will run it.

This will run the stored procedure above.



The alerts are for suggested performance conditions when you might like 

to have a snapshot taken of all the connections at the time the condition occurred.

Come up with as many of your own favorite alerts for events extreme enough for you to wonder

in what context they took place. 



!!!!NOTE: After running this script, go take  a look at the job's and the alerts' properties

       to customize  schedules, owners, & notifications

**************************************************************************************/





DECLARE @JobName sysname, @JobId BINARY(16)

		,@ServerName sysname, @DB sysname, @Descrip nvarchar(200)



SELECT @ServerName= @@SERVERNAME, @DB=DB_NAME(),@JobName='StoreActivityMonitorData' 

	,@Descrip= N'Captures and stores all data from Activity Monitor/sp_who2 system stored procedure right at runtime. '

					+ CHAR(13) +

					N'Data is stored in a table called ActivityMonitorData.'



IF NOT EXISTS(SELECT 0 FROM msdb.dbo.sysjobs WHERE name=@JobName)

	BEGIN

		EXEC  msdb.dbo.sp_add_job @job_name=@JobName, @enabled=1, 



				@description=@Descrip

				, @category_name=N'[Uncategorized (Local)]' 

				, @job_id = @JobId OUTPUT



--!!!!! For best results, change the @command=' parameterto include the 3-part name of the stored procedure,

--to include a reference to the database where you've put it

		EXEC msdb.dbo.sp_add_jobstep @job_name=@JobName, @step_name=N'RunTSQLQuery' 

				, @step_id=1

				, @cmdexec_success_code=0

				, @on_success_action=1

				, @subsystem=N'TSQL' 

				,@command=N'EXEC dbo.uspStoreActivityMonitorData' 

				, @database_name=@DB

				, @flags=0



		--Make the current server you're running the script on the Target server for this job

		EXEC msdb.dbo.sp_add_jobserver @job_name=@JobName, @server_name = @ServerName



	END











-----------------------------------------------------------

--Create an alert to fire when CPU usage rises above 90%

-----------------------------------------------------------



IF NOT EXISTS (SELECT name FROM msdb.dbo.sysalerts WHERE name = 'CPUAbove90Percent')

	EXEC msdb.dbo.sp_add_alert @name=N'CPUAbove90Percent', 

			@enabled=1, 

			--3 minutes between repetitions of this alert. Change if you'd like.

			@delay_between_responses=180, 

			@include_event_description_in=0, 

			@performance_condition=N'SQLServer:Resource Pool Stats|CPU usage %|default|>|90', 

			@job_name=@JobName





----------------------------------------------------------------------------------------------------------

--Create alerts to fire for various Fatal Error severities (just 17-19 here, to start)

----------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT name FROM msdb.dbo.sysalerts WHERE name = 'InsufficientResourcesError')

	EXEC msdb.dbo.sp_add_alert @name=N'InsufficientResourcesError', 

			@message_id=0, 

			@severity=17, 

			@enabled=1, 

			@delay_between_responses=180, 

			@include_event_description_in=0, 

			@job_name=@JobName



IF NOT EXISTS (SELECT name FROM msdb.dbo.sysalerts WHERE name = 'NonfatalInternalError')

	EXEC msdb.dbo.sp_add_alert @name=N'NonfatalInternalError', 

			@message_id=0, 

			@severity=18, 

			@enabled=1, 

			@delay_between_responses=180, 

			@include_event_description_in=0, 

			@job_name=@JobName





IF NOT EXISTS (SELECT name FROM msdb.dbo.sysalerts WHERE name = 'ResourceFatalError')

	EXEC msdb.dbo.sp_add_alert @name=N'ResourceFatalError', 

			@message_id=0, 

			@severity=19, 

			@enabled=1, 

			@delay_between_responses=180, 

			@include_event_description_in=0, 

			@job_name=@JobName





GO













/****************The Lytic Group, copyright, 2021*****************

****************Published March, 2021 *****************

*********at http://www.lyticgroup.com by Edward Heraux*****************

******************************************************************************************/



/*************************************************************************************************************************

2. uspStoreActivityMonitorDataWithCommands 

This second stored procedure is the advanced version of the other Activity Monitor storage script above. 

It is advanced in that it grabs more data, but also takes up more resources.

It brings in ALL of the info you would be able to access through Activity Monitor, including the last T-SQL batch executed by each Session_ID

by incorporating data from the DBCC INputBuffer command.



NOTE!! USE THIS WITH CAUTION AND TEST IT WELL! Executing this stored proc comes with some risks:

	1. The table variable that gets populated with the commands does not get populated 

		at the same time as the query that traps all the Activity Monitor data, 

		so there is a risk that the two will not correspond perfectly in time. This could be negligible or it could be important. 

	2. This script involves a loop that may be costly to the CPU. 

		If you have this stored proc run at the end of an alert that fires when you're experiencing excessive CPU 

		or you're otherwise experiencing Insufficient Resources, 

		then running it could be counterproductive and it may  possibly be incapable of executing successfully at that time.

*************************************************************************************************************************/



CREATE PROC uspStoreActivityMonitorDataWithCommands

AS





IF OBJECT_ID('ActivityMonitorDataWithCommands') IS NULL

	CREATE TABLE ActivityMonitorDataWithCommands(SessionID int

									, UserProcess char(10)

									, [Login] sysname

									, DB sysname

									, TaskState varchar(255)

									, Command varchar(MAX)

									, Application varchar(255)

									, WaitTimeMS int

									, WaitType varchar(255)

									, WaitResource varchar(255)

									, BlockedBy int

									, HeadBlocker varchar(2)

									, MemoryUseKB float

									, HostName varchar(1000)

									, NetAddress varchar(1000)

									, WorkloadGroup varchar(255)

									, TotalCPUms int

									, TOtalPhysicalIOmb int

									, OpenTransactions int

									, LoginTime datetime

									, LastRequestStartTime datetime

									, ExecutionTime datetime 

									, LastExecutedBatch varchar(MAX)

									)



--Temporarily store all Activity Monitor data in a table variable, without the last command executed by each

DECLARE @ActivityMonitor table(SessionID int

								, UserProcess char(10)

								, [Login] sysname

								, DB sysname

								, TaskState varchar(255)

								, Command varchar(MAX)

								, Application varchar(255)

								, WaitTimeMS int

								, WaitType varchar(255)

								, WaitResource varchar(255)

								, BlockedBy int

								, HeadBlocker varchar(2)

								, MemoryUseKB float

								, HostName varchar(1000)

								, NetAddress varchar(1000)

								, WorkloadGroup varchar(255)

								, TotalCPUms int

								, TOtalPhysicalIOmb int

								, OpenTransactions int

								, LoginTime datetime

								, LastRequestStartTime datetime

								, ExecutionTime AS Current_Timestamp 

								)







INSERT INTO @ActivityMonitor(SessionID, UserProcess ,[Login], DB, TaskState, Command, [Application], WaitTimeMS

								, WaitType, WaitResource, BlockedBy, HeadBlocker, MemoryUseKB, HostName 

								, NetAddress, WorkloadGroup, TotalCPUms, TOtalPhysicalIOmb, OpenTransactions

								,LoginTime, LastRequestStartTime)

SELECT [SessionID]    = s.session_id, 

   [User Process]  = CONVERT(CHAR(1), s.is_user_process),

   [Login]         = s.login_name,   

   [Database]      = case when p.dbid=0 then N'' else ISNULL(db_name(p.dbid),N'') end, 

    [Task State]    = ISNULL(t.task_state, N''), 

   [Command]       = ISNULL(r.command, N''), 

   [Application]   = ISNULL(s.program_name, N''), 

   [Wait Time (ms)]     = ISNULL(w.wait_duration_ms, 0),

   [Wait Type]     = ISNULL(w.wait_type, N''),

   [Wait Resource] = ISNULL(w.resource_description, N''), 

   [Blocked By]    = ISNULL(CONVERT (varchar, w.blocking_session_id), ''),

   [Head Blocker]  = 

        CASE 

            -- session has an active request, is blocked, but is blocking others or session is idle but has an open tran and is blocking others

            WHEN r2.session_id IS NOT NULL AND (r.blocking_session_id = 0 OR r.session_id IS NULL) THEN '1' 

            -- session is either not blocking someone, or is blocking someone but is blocked by another party

            ELSE ''

        END, 

   [Memory Use (KB)]  = s.memory_usage * 8192 / 1024,

   [Host Name]     = ISNULL(s.host_name, N''),

   [Net Address]   = ISNULL(c.client_net_address, N''), 

      [Workload Group] = ISNULL(g.name, N''),

   [Total CPU (ms)] = s.cpu_time, 

   [Total Physical I/O (MB)]   = (s.reads + s.writes) * 8 / 1024, 



   [Open Transactions] = ISNULL(r.open_transaction_count,0), 

   [Login Time]    = s.login_time, 

   [Last Request Start Time] = s.last_request_start_time



FROM sys.dm_exec_sessions s LEFT OUTER JOIN sys.dm_exec_connections c ON (s.session_id = c.session_id)

	LEFT OUTER JOIN sys.dm_exec_requests r ON (s.session_id = r.session_id)

	LEFT OUTER JOIN sys.dm_os_tasks t ON (r.session_id = t.session_id AND r.request_id = t.request_id)

	LEFT OUTER JOIN 

	(

		-- In some cases (e.g. parallel queries, also waiting for a worker), one thread can be flagged as 

		-- waiting for several different threads.  This will cause that thread to show up in multiple rows 

		-- in our grid, which we don't want.  Use ROW_NUMBER to select the longest wait for each thread, 

		-- and use it as representative of the other wait relationships this thread is involved in. 

		SELECT *, ROW_NUMBER() OVER (PARTITION BY waiting_task_address ORDER BY wait_duration_ms DESC) AS row_num

		FROM sys.dm_os_waiting_tasks 

	) w ON (t.task_address = w.waiting_task_address) AND w.row_num = 1

	LEFT OUTER JOIN sys.dm_exec_requests r2 ON (s.session_id = r2.blocking_session_id)

	LEFT OUTER JOIN sys.dm_resource_governor_workload_groups g ON (g.group_id = s.group_id)

	LEFT OUTER JOIN sys.sysprocesses p ON (s.session_id = p.spid)

WHERE s.session_id>50 AND r.Command IS NULL





--Trap all the most recent commands, one Session_ID at a time

DECLARE @Counter int, @NumOfSessionIDs int

		, @LowestUnusedSessionID int, @CurrentSessionID int



DECLARE @LastCommands table (SessionID int NULL

			,EventType varchar(255)

			,Parameters varchar(255)

			,EventInfo varchar(MAX)

			)

			

SET @Counter=1



SELECT @NumOfSessionIDs=COUNT(*), @CurrentSessionID=MIN(SessionID)

FROM @ActivityMonitor



WHILE @Counter<=@NumOfSessionIDs

	BEGIN

		INSERT INTO @LastCommands (EventType, Parameters,EventInfo)

		EXEC( 'DBCC INputBuffer(' + @CurrentSessionID +')')



		--There should only be one row here that updates

		UPDATE @LastCommands 

		SET SessionID=@CurrentSessionID

		WHERE SessionID IS NULL



		--Increment the counter, and then the CurrentSessionID variable to the next value up

		SELECT @Counter=@Counter+1, @CurrentSessionID=@CurrentSessionID+1

		

		SELECT @CurrentSessionID=MIN(SessionID)

		FROM @ActivityMonitor

		WHERE SessionID>=@CurrentSessionID



	END



--Join the connections to the commands and store the result



INSERT INTO ActivityMonitorDataWithCommands(SessionID, UserProcess ,[Login], DB, TaskState, Command, [Application], WaitTimeMS

								, WaitType, WaitResource, BlockedBy, HeadBlocker, MemoryUseKB, HostName 

								, NetAddress, WorkloadGroup, TotalCPUms, TOtalPhysicalIOmb, OpenTransactions

								,LoginTime, LastRequestStartTime, ExecutionTime, LastExecutedBatch)

SELECT A.*, L.EventInfo AS LastExecutedBatch 

FROM @ActivityMonitor A 

	LEFT OUTER JOIN @LastCommands L 

		ON  A.SessionID=L.SessionID





GO







/***************************************************************************************

Now create the job and the alerts that will run it.

This will run the stored procedure above.



The alerts are for suggested performance conditions when you might like 

to have a snapshot taken of all the connections at the time the condition occurred.

Come up with as many of your own favorite alerts for events extreme enough for you to wonder

in what context they took place. 



!!!!NOTE: After running this script, go take  a look at the job's and the alerts' properties

       to customize  schedules, owners, & notifications

**************************************************************************************/





DECLARE @JobName sysname, @JobId BINARY(16)

		,@ServerName sysname, @DB sysname, @Descrip nvarchar(200)



SELECT @ServerName= @@SERVERNAME, @DB=DB_NAME(),@JobName='StoreActivityMonitorDataWithCommands' 

	,@Descrip= N'Captures and stores all data from Activity Monitor right at runtime. '

					+ CHAR(13) +

					N'Data is stored in a table called ActivityMonitorDataWithCommands.'



--Create the job & the one job step 

IF NOT EXISTS(SELECT 0 FROM msdb.dbo.sysjobs WHERE name=@JobName)

	BEGIN

		EXEC  msdb.dbo.sp_add_job @job_name=@JobName, @enabled=1, 



				@description=@Descrip

				, @category_name=N'[Uncategorized (Local)]' 

				, @job_id = @JobId OUTPUT



--!!!!! For best results, change the @command=' parameterto include the 3-part name of the stored procedure,

--to include a reference to the database where you've put it

		EXEC msdb.dbo.sp_add_jobstep @job_name=@JobName, @step_name=N'RunTSQLQuery' 

				, @step_id=1

				, @cmdexec_success_code=0

				, @on_success_action=1

				, @subsystem=N'TSQL' 

				,@command=N'EXEC dbo.uspStoreActivityMonitorDataWithCommands' 

				, @database_name=@DB

				, @flags=0



		--Make the current server you're running the script on the Target server for this job

		EXEC msdb.dbo.sp_add_jobserver @job_name=@JobName, @server_name = @ServerName



	END











-----------------------------------------------------------

--Create an alert to fire when CPU usage rises above 90%

-----------------------------------------------------------



IF NOT EXISTS (SELECT name FROM msdb.dbo.sysalerts WHERE name = 'CPUAbove90Percent')

	EXEC msdb.dbo.sp_add_alert @name=N'CPUAbove90Percent', 

			@enabled=1, 

			--3 minutes between repetitions of this alert. Change if you'd like.

			@delay_between_responses=180, 

			@include_event_description_in=0, 

			@performance_condition=N'SQLServer:Resource Pool Stats|CPU usage %|default|>|90', 

			@job_name=@JobName





----------------------------------------------------------------------------------------------------------

--Create alerts to fire for various Fatal Error severities (just 17-19 here, to start)

----------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT name FROM msdb.dbo.sysalerts WHERE name = 'InsufficientResourcesError')

	EXEC msdb.dbo.sp_add_alert @name=N'InsufficientResourcesError', 

			@message_id=0, 

			@severity=17, 

			@enabled=1, 

			@delay_between_responses=180, 

			@include_event_description_in=0, 

			@job_name=@JobName



IF NOT EXISTS (SELECT name FROM msdb.dbo.sysalerts WHERE name = 'NonfatalInternalError')

	EXEC msdb.dbo.sp_add_alert @name=N'NonfatalInternalError', 

			@message_id=0, 

			@severity=18, 

			@enabled=1, 

			@delay_between_responses=180, 

			@include_event_description_in=0, 

			@job_name=@JobName





IF NOT EXISTS (SELECT name FROM msdb.dbo.sysalerts WHERE name = 'ResourceFatalError')

	EXEC msdb.dbo.sp_add_alert @name=N'ResourceFatalError', 

			@message_id=0, 

			@severity=19, 

			@enabled=1, 

			@delay_between_responses=180, 

			@include_event_description_in=0, 

			@job_name=@JobName





GO







/****************WE’D LOVE YOUR FEEDBACK****************************************************************************

Shoot us an email at info@lyticgroup.com 

and connect with Ed Heraux (the script author) on LinkedIn, http://www.linkedin.com/pub/edward-heraux-pmp/1/826/730/

for announcements of all new scripts.

************************************************************************************************************************/
`;

/**
 * RAW SQL
 * UPDATE STATISTICS BY AGE
 */
const uploadStatisticsByAge = `
                        

/****************The Lytic Group, copyright, 2021*****************/

/****************Published January, 2021 *****************/

/*********from http://www.lyticgroup.com by Edward Heraux*****************/





/****** Object:  StoredProcedure [dbo].[uspUpdateOldStatistics2012]    Script Date: 1/15/2021 11:59:17 AM ******/

SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO



--*****************************************************************************************************************

--If part of your database administration routine is to manually update statistics for tables that need it,

--run this script on a daily schedule instead. 

--This stored procedure will minimize guesswork and research time, as you can set an ideal number of days 

--after which you'd like any tables' statistics updated,

--and only update those tables.



This version of the script will work with SQL Server version 2008 RS _WITH SP2_ and up.

--*****************************************************************************************************************





/****************IMPORTANT WARNING!!!!!*****************************************************

 DO NOT run this script in the middle of your production day. 

You risk locking up entire tables of your data at horribly inopportune times.

Remember also that updating statistics also causes stored procedures to recompile, 

which will likely slow their performance the next time they are run.

*************************************************************************************************/





/****************WE’D LOVE YOUR FEEDBACK****************************************************************************

Email: ed@lyticgroup.com  

and connect with Ed Heraux (the script author) on LinkedIn, http://www.linkedin.com/pub/edward-heraux-pmp/1/826/730/

for announcements of all new scripts.

************************************************************************************************************************/









CREATE PROC [dbo].[uspUpdateOldStatistics2012] @TableName sysname=NULL --Leave this blank for the stored proc to *find* all the tables that need their statistics updated.

																	--Otherwise, indicate a table name

											, @MinDaysOld int=0 -- Only update statistics whose last update was at least this many days ago





/*************Find or update all statistics for tables whose statistics haven't been up dated in a given set of days.***************/

AS

DECLARE @YoungestDateToUpdate date= DATEADD(DAY,(-1)* @MinDaysOld,CURRENT_TIMESTAMP)

DECLARE @SQLText varchar(MAX)



--If the TableName variable was skipped, retrieve statistics update data on all tables

DECLARE @StatsHistory TABLE(RowID int IDENTITY

						,ObjectType varchar(20)

						,ObjectID int

						,StatsId int

						,ObjectName sysname

						,FilterDefinition varchar(100)

						,LastStatisticsUpdate datetime

						,NumRows int

						,RowsSampled int

						,AgeInDays int

						)



--If a table was provided, check its statistics update history, and update if the last one was long enough ago

IF @TableName IS NOT NULL

	BEGIN

		--Make sure the passed table name is legitimate

		IF NOT EXISTS (SELECT 0 

						FROM sys.sysobjects 

						WHERE Name=@TableName AND type IN ('U','S','V'))

			BEGIN

				RAISERROR('The table name passed in as a parameter is not a valid name of a table or view in this database.',16,1)

				RETURN

			END



		--The sys.dm_db_stats_properties function is only available starting with SQL 2008 R2 **with SP2.** . 

		--This is the principle difference between this version of the stored proc and the <2008R2 version, also 

		INSERT INTO @StatsHistory(ObjectType,ObjectID, StatsID,ObjectName, FilterDefinition, LastStatisticsUpdate, NumRows,RowsSampled,  AgeInDays)

		SELECT O.type AS ObjectType,sp.object_id, sp.stats_id, O.name, filter_definition, last_updated, rows, rows_sampled

				,DateDiff(DAY,STATS_DATE(Stat.object_id, Stat.stats_id),CAST (CURRENT_TIMESTAMP AS DATE)) AS AgeInDays

		FROM sys.stats AS stat 

		INNER JOIN sys.sysobjects O

			ON O.id=stat.object_id

		CROSS APPLY sys.dm_db_stats_properties(stat.object_id, stat.stats_id) AS sp

		WHERE stat.object_id = object_id(@TableName)

				AND CAST(last_updated as DATE) <=@YoungestDateToUpdate



		--Update the statistics on the table if it hasn't had them updated recently enough. Throw an error if it hasn't.		

		IF @@ROWCOUNT>0

			BEGIN		

				SET @SQLText= 'UPDATE STATISTICS [' + @TableName + '] WITH RESAMPLE' --Change this last item to FULLSCAN or SAMPLE X PERCENT if you have a  preference (see "UPDATE STATISTICS" in Books Online)

				EXECUTE(@SQLText)

			END

		ELSE 

			RAISERROR ('There were no tables with statistics last updated long enough ago.',16,1)



		RETURN

	END



--Otherwise, grab statistics for all tables that qualify by age of their last stats update

ELSE

	BEGIN

		--Again, the sys.dm_db_stats_properties function is only available starting with SQL 2008 R2 **with SP2.**

		INSERT INTO @StatsHistory(ObjectType,ObjectID, StatsID,ObjectName, FilterDefinition, LastStatisticsUpdate, NumRows,RowsSampled,  AgeInDays)

		SELECT  O.type AS ObjectType,sp.object_id, sp.stats_id, O.name, filter_definition, last_updated, rows, rows_sampled

			,DateDiff(DAY,STATS_DATE(Stat.object_id, Stat.stats_id),CAST (CURRENT_TIMESTAMP AS DATE)) AS AgeInDays

		FROM sys.stats AS stat 

		INNER JOIN sys.sysobjects O

			ON O.id=stat.object_id

		CROSS APPLY sys.dm_db_stats_properties(stat.object_id, stat.stats_id) AS sp

		--Exclude system tables, although this is enitrely optional.

		WHERE O.type IN ('U','V')

			AND CAST(last_updated as DATE) <=@YoungestDateToUpdate



		--Check whether there are any tables to work on. If there aren't, exit with an error.

		IF @@ROWCOUNT=0

		BEGIN

			RAISERROR ('There were no tables with their statistics last updated long enough ago.',16,1)

			RETURN

		END



	END





--Size up and save the most recent statistics updates. This gives us a table of unique table names to work with.

SELECT  ObjectID, ObjectType, ObjectName, MAX(CAST(LastStatisticsUpdate AS DATE)) AS LatestStatisticsUpdate, MAX(AgeInDays) AS AgeInDays

INTO #TargetObjects

FROM @StatsHIstory

GROUP BY ObjectID, ObjectType, ObjectName







--Cursor through all the tables in the table variable, updating the statistics in each

DECLARE @Counter as int=1, @NumTables int, @CurrentObjectID int





SELECT @NumTables=COUNT(*), @CurrentObjectID=MIN(ObjectID) 

FROM #TargetObjects



WHILE @Counter<=@NumTables

	BEGIN

		--grab one table name to work with

		SELECT @TableName=MIN(ObjectName)

		FROM #TargetObjects

		

		SET @SQLText= 'UPDATE STATISTICS [' + @TableName + '] WITH RESAMPLE' --Change this last item to FULLSCAN or SAMPLE X PERCENT if you have a  preference (see "UPDATE STATISTICS" in Books Online)



		EXECUTE(@SQLText)

		

		SET @Counter=@Counter+1

		

		DELETE #TargetObjects

		WHERE ObjectName=@TableName

	END



GO







/****************WE’D LOVE YOUR FEEDBACK****************************************************************************

Email info@lyticgroup.com  

and connect with Ed Heraux (the script author) on LinkedIn, http://www.linkedin.com/pub/edward-heraux-pmp/1/826/730/

for announcements of all new scripts.

************************************************************************************************************************/
`;

/**
 * RAW SQL
 * AUTO REBUILD INDEXES
 */
const autoRebuildIndexes = `
/****************The Lytic Group, copyright, 2021*****************/

/****************Published February, 2021 *****************/

/*********from http://www.LyticGroup.com by Edward Heraux*****************/



/************************************************************************************************

This pair of stored procs together will allow you to defrag/reindex all the tables in a database 

that you deem necessary, based on a fragmentation percentage that you pass in as a parameter. 

It also keeps a "Before" and "After" history of your tables' fragmentation 

every time you run it, so that you can actually report on this regular maintenance easily.

Schedule this beauty to run occasionally, and a good portion of your job of

keeping your tables streamlined and healthy gets done for you.

 *******************************************************************************************/



/****************IMPORTANT WARNING!!!!!*****************/

/**********Do not run the second stored proc, uspReindexAll,

 at just any old time of day on a production SQL Server!!!!!

This is an expensive stored procedure that will take ages to run 

(and tie up a lot of resources) on a large database, 

especially if little defragmentation has ever been done on it.



Pick the quietest, slowest part of your SQL Server's work week,

 and this script can be a handy administration automation tool.

*******************************************************************/





--1. uspTableContiguity

/*This first stored procedure makes all the data from DBCC SHOWCONTIG

available so that we can populate a table with its data

*/

SET QUOTED_IDENTIFIER ON 

GO

SET ANSI_NULLS ON 

GO





CREATE PROC dbo.uspTableContiguity 

--Pass a NULL @tablename if you want to capture the contiguity stats for all tables

@tablename varchar(255)=NULL

AS

--Show contiguity info for all tables if no table name is passed in

--(The next stored proc, however, will always call this to obtain info on all tables)

IF @tablename IS NULL

     BEGIN

	DBCC SHOWCONTIG WITH TABLERESULTS

	RETURN

     END

ELSE

--otherwise find the ID of the table passed in

    BEGIN

	DECLARE @tableid int

	SET @tableid=(SELECT id FROM sysobjects where type='u' and name = @tablename)



	DBCC SHOWCONTIG (@tableid) WITH TABLERESULTS

    END

GO





SET QUOTED_IDENTIFIER OFF 

GO

SET ANSI_NULLS ON 

GO

-------------------------End of first proc------------------------











--2. uspReindexTables

/***********************************************************************/

/*This second  stored procedure grabs and looks through the data produced by

DBCC SHOWCONTIG, and REINDEXes all the tables that are above a fragmentation

percentage that you specify.

It will also create & update a table with time-stamped 

records of the fragmentation of those tables before and after the REINDEXing gets done.

***********************************************************************/



SET QUOTED_IDENTIFIER OFF 

GO

SET ANSI_NULLS ON 

GO

SET NOCOUNT ON

GO



ALTER  PROC [dbo].[uspReindexTables] 

	@db sysname

,	@FragThreshold int  --Minimum fragmentation percentage that you want 

						--to trigger a reindexing of that table or index.

						--We recommend 30.



AS

DECLARE @ErrorText varchar(2048)



SET @FragThreshold=100-@FragThreshold



BEGIN TRAN

	BEGIN TRY

		/*Make sure the table is in place to store all the fragmentation data*/

		IF NOT EXISTS (SELECT * FROM sysobjects where type='u' AND name='tblFragmentationInfo')  

		CREATE TABLE dbo.tblFragmentationInfo (

			RowID int IDENTITY,

			[ObjectName] [varchar] (255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL ,

			[ObjectID] [int] NULL ,

			[IndexName] [varchar] (255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL ,

			[IndexID] [int] NULL ,

			[Level] [int] NULL ,

			[Pages] [int] NULL ,

			[Rows] [int] NULL ,

			[MinimumRecordSize] [int] NULL ,

			[MaximumRecordSize] [int] NULL ,

			[AverageRecordSize] [decimal](11, 5) NULL ,

			[ForwardedRecords] [int] NULL ,

			[Extents] [int] NULL ,

			[ExtentSwitches] [int] NULL ,

			[AverageFreeBytes] [decimal](11, 5) NULL ,

			[AveragePageDensity] [decimal](11, 5) NULL ,

			[ScanDensity] [decimal](11, 5) NULL ,

			[BestCount] [int] NULL ,

			[ActualCount] [int] NULL ,

			[LogicalFragmentation] [decimal](18, 0) NULL ,

			[ExtentFragmentation] [decimal](11, 5) NULL ,

			[SchemaID] int NULL,

			[SchemaName] sysname NULL,

			[CheckDate] [datetime] NULL CONSTRAINT [DF_tblFragmentationInfo_DefragDate] DEFAULT (getdate()),

			[DefragDate] [datetime] NULL, --the time-stamp of when this table was reindexed during this sp

			[TableSize] AS ([Pages] * 8),

			[InProcess] bit CONSTRAINT DF_InProcess_Yes DEFAULT (1) --Distinguishes records added during this running of the sp

																	-- from records already in the table from prior executions

		) ON [PRIMARY]



		--(Just for testing)

		--ELSE PRINT 'tblFragmentationInfo exists'



		/*Dump a 'before' snapshot of current fragmentation into tblFragmentationInfo*/

		INSERT INTO dbo.tblFragmentationInfo (ObjectName, ObjectId, IndexName, IndexID, [Level], Pages, [rows], MinimumRecordSize,

			MaximumRecordSize, AverageRecordSize, ForwardedRecords, Extents, ExtentSwitches, AverageFreeBytes, 

			AveragePageDensity, ScanDensity, BestCount, ActualCount, LogicalFragmentation, ExtentFragmentation)

		EXECUTE dbo.uspTableContiguity

		IF @@Error<>0 

			BEGIN

			  RAISERROR ('Could not create snapshot of tables. tblFragmentationInfo was not populated.',16,1)

			  ROLLBACK TRAN

			  RETURN

			END



		/*Put the schema IDs in the table*/

		UPDATE tblFragmentationInfo

		SET SchemaName=S.name, SchemaID=S.schema_id

		FROM sys.schemas S

			INNER JOIN sys.all_objects A on A.Schema_id=S.schema_id

			INNER JOIN tblFragmentationInfo F ON F.ObjectID=A.object_id 





		/*Get rid of system tables in tblFragmentationInfo, which can't be REINDEXed*/

		DELETE FROM dbo.tblFragmentationInfo WHERE LEFT(ObjectName,3)='sys'

	END TRY

	

	/*Error handling block*/

	BEGIN CATCH

		SELECT @ErrorText='Errors INSERTing/UPDATing tblFragmentationInfo table. ErrorNum ' + ERROR_NUMBER() +':  ' + ERROR_MESSAGE()

		RAISERROR(@ErrorText,16,1)

		ROLLBACK TRAN

		RETURN

	END CATCH

COMMIT



/*Create a temp table holding a list of the database's tables that are fragmented enough for concern,

 but just the ones called up for this procedure*/

SELECT RowID, ObjectName, SchemaName, ScanDensity  

INTO #tblFragmentedTables 

FROM dbo.tblFragmentationInfo 

WHERE ScanDensity<@FragThreshold AND InProcess<>0





DECLARE @rows int, @counter int, @CurrentRowID int

DECLARE @FQTableName sysname



SELECT @counter=1, @rows=COUNT(*) 

FROM #tblFragmentedTables



/*(Just for testing) A quick look at which tables we're about to REINDEX*/

--SELECT 'Tables About To Be Defragged' 

--SELECT * FROM #tblFragmentedTables



/*Begin a loop to defrag each table that made it into the #FragmentedTables table.

(This is SO much more efficient than a cursor!!)*/

BEGIN TRY

	WHILE @counter<=@rows

		BEGIN

			SELECT Top 1 @CurrentRowID=RowID, @FQTableName=SchemaName + '.' + ObjectName

			FROM #tblFragmentedTables

			ORDER BY RowID ASC

			

			--(Just for testing) Show which single table is about to be REINDEXed

			--SELECT @CurrentRowID AS CurrentRowID, @FQTableName AS CurrentTableName



			DBCC DBREINDEX(@FQTableName,'',0)

			

			--Log that this table's been taken care of, back in tblFragmentationinfo.

			UPDATE dbo.tblFragmentationInfo 

			SET InProcess=0

			FROM dbo.tblFragmentationInfo F

				INNER JOIN (SELECT Top 1 SchemaName,ObjectName FROM #tblFragmentedTables) AS Sub

					ON F.SchemaName=Sub.SchemaName AND F.ObjectName=Sub.ObjectName

			WHERE InProcess<>0

			

			--Prepare for the next iteration of the loop.

			DELETE #tblFragmentedTables WHERE RowID=@CurrentRowID

			SET @counter=@counter+1

		END

END TRY

--Error handling block

BEGIN CATCH

	SELECT @ErrorText='Failed reindexing a table. ErrorNum ' + ERROR_NUMBER() +':  ' + ERROR_MESSAGE()

	RAISERROR(@ErrorText,16,1)

	ROLLBACK TRAN

	RETURN

END CATCH







/*A bunch of things to finalize the "After" info in tblFragmentationInfo, and clean up after ourselves*/

BEGIN TRAN

	BEGIN TRY



		/* Dump an 'after' snapshot of current fragmentation into tblFragmentationInfo */

		INSERT dbo.tblFragmentationInfo (ObjectName, ObjectId, IndexName, IndexID, [Level], Pages, [rows], MinimumRecordSize,

			MaximumRecordSize, AverageRecordSize, ForwardedRecords, Extents, ExtentSwitches, AverageFreeBytes, 

			AveragePageDensity, ScanDensity, BestCount, ActualCount, LogicalFragmentation, ExtentFragmentation)

		EXECUTE dbo.uspTableContiguity



		/*Make sure the 'after' picture doesn't get processed in the future

		, since InProcess defaults to TRUE*/

		UPDATE dbo.tblFragmentationInfo

		SET InProcess=0

		WHERE InProcess<>0



		/*Get rid of system tables in tblFragmentationInfo, which can't be REINDEXed*/

		DELETE FROM dbo.tblFragmentationInfo WHERE LEFT(ObjectName,3)='sys'



		--(Just for testing) Take a look at the reindexing history to-date

		--SELECT ObjectName, ScanDensity, CheckDate, DefragDate, InProcess

		--FROM dbo.tblFragmentationInfo

		--ORDER BY CheckDate, ObjectName

	

	END TRY

	

	--Error handling block

	BEGIN CATCH

		SELECT @ErrorText='ErrorNum ' + ERROR_NUMBER() +':  ' + ERROR_MESSAGE()

		RAISERROR(@ErrorText,16,1)

		ROLLBACK TRAN

		RETURN

	END CATCH

COMMIT



--Get rid of the temp table

DROP TABLE #tblFragmentedTables

GO

SET QUOTED_IDENTIFIER OFF 

GO

SET ANSI_NULLS ON 

GO
`;


/**
 * RAW SQL
 * JOB SUMMARY
 */
const jobSummary = `
/****************The Lytic Grouyp, copyright, 2021*****************/

/****************Published March 17, 2021 *****************/

/*********from http://www.lyticgroup.com by Edward Heraux*****************/



/************************************************************************************************

Run this script all the way through to create a user-defined function (ufnServerInfo), 

and a stored procedure (uspJobsSummary) to feed the report included with this script 

in the .zip file you downloaded (JobsSummary.rdl or JobsSummary2005/2008).

 *******************************************************************************************/





/************************************************************************************************

Return some basic information about your SQL Server 

and the edition & service pack you're running.

Used in the header of the included reports.

 *******************************************************************************************/

 

 

IF OBJECT_ID (N'dbo.ufnServerInfo', N'IF') IS NOT NULL

    DROP FUNCTION dbo.ufnServerInfo

GO



CREATE FUNCTION dbo.ufnServerInfo()

RETURNS TABLE

AS

RETURN

--Grab server name and version info

SELECT SERVERPROPERTY('servername') AS ServerName

	, @@Version as SQLServerVersion

	, CONVERT(VARCHAR(100), serverproperty('Edition')) AS Edition

	, SERVERPROPERTY('productversion')AS Version



	, SERVERPROPERTY ('productlevel') AS ProductLevel

	,CONVERT(VARCHAR(100), SERVERPROPERTY ('LicenseType')) AS LicenseType



GO





/************************************************************************************************

Pass any 2 date parameters to this stored procedure and it will produce a list of 

all essential info about all jobs, on all your databases, that ran in between those dates.

 *******************************************************************************************/



IF OBJECT_ID (N'dbo.uspJobSummary', N'IF') IS NOT NULL

    DROP PROC dbo.uspJobSummary

GO

CREATE PROC [dbo].[uspJobSummary] @StartDate datetime=NULL

							, @EndDate datetime = NULL --getdate

AS





SET NOCOUNT ON

--Setting the default @StartDate to 1/1/1900

SET @StartDate=ISNULL(@StartDate,'19000101 12:00:00 AM' )



--Setting the default @EndDate to the end of the day, either on the date passed or today if there was none

SET @EndDate= CAST(CAST(@EndDate  AS char(12))+ ' 23:59:50.999' AS datetime)

SET @EndDate=ISNULL(@EndDate,CAST(CAST(getdate() AS char(12)) + ' 23:59:59.999' AS datetime))



BEGIN TRY

	--Create a table variable  to hold the data generated by sp_help_jobhistory



declare @JobHistory table(

    instance_id int null, 

    job_id uniqueidentifier null, 

    job_name sysname null, 

    step_id int null ,

    step_name sysname null, 

    sql_message_id int null, 

    sql_severity int null, 

    message nvarchar(4000) null, 

    run_status int null, 

    run_date int null, 

    run_time int null, 

    run_duration int null, 

    operator_emailed sysname null, 

    operator_netsent sysname null, 

    operator_paged sysname null, 

    retries_attempted int null, 

    server sysname null,

     run_duration_formatted  AS RIGHT('000000' + CONVERT(varchar(6), run_duration), 6),

     run_time_formatted AS RIGHT('000000' + CONVERT(varchar(6), run_time), 6), 

     run_date_formatted AS LEFT(CAST(run_date AS varchar(10)),4) + '-'

				+ SUBSTRING(CAST(run_date AS varchar(10)),5,2) + '-'

				+ RIGHT(CAST(run_date AS varchar(10)),2) 

)



--Populate the table variable with job history data

insert into @JobHistory 

exec msdb.dbo.sp_help_jobhistory @mode='Full'		



--Show us the job history within the passed parameters		

SELECT H.job_name AS JobName, S.database_name  AS DatabaseName 		

		, CASE H.run_status      

			WHEN 0 THEN 'Failed'

			WHEN 1 THEN 'Success'  

			WHEN 3 THEN 'Cancelled'  

			WHEN 5 THEN 'Unknown'  

			ELSE 'Other'  

		END AS RunStatus

		,LEFT(H.run_duration_formatted,2) + ':' + SUBSTRING(H.run_duration_formatted,3,2)+':' + Right(H.run_duration_formatted,2)  AS RunDuration

		,H.run_date_formatted AS RunDate, H.run_time_formatted AS RunTime

		--concatenate two of the computed columns from the Table variable into a proper run date & time

		,CONVERT(datetime,H.run_date_formatted + ' ' + LEFT(H.run_time_formatted,2) + ':' + SUBSTRING(H.run_time_formatted,3,2)+':' + RIGHT(H.run_time_formatted,2)) AS RunDateTime



FROM @JobHistory H

		INNER JOIN (SELECT job_id, MAX(database_name) AS database_Name

					FROM msdb.dbo.sysjobsteps 

					GROUP BY job_id) S

			ON H.job_id=S.job_id		

WHERE H.step_id=0 	

	AND CONVERT(datetime,H.run_date_formatted + ' ' + LEFT(H.run_time_formatted,2) + ':' + SUBSTRING(H.run_time_formatted,3,2)+':' + RIGHT(H.run_time_formatted,2)) 

			BETWEEN @StartDate and CAST(@EndDate AS char(12)) + ' 23:59:59.999'



ORDER BY H.run_date_formatted desc



END TRY

BEGIN CATCH

		--We're going to refer to these variables in a RAISERROR command

		DECLARE @ErrorMessage NVARCHAR(4000)

		DECLARE @ErrorSeverity INT

		DECLARE @ErrorState INT



		SELECT @ErrorMessage = 'Error number ' + CAST(ERROR_NUMBER() AS varchar(10)) +': ' + ERROR_MESSAGE(),

			  @ErrorSeverity = ERROR_SEVERITY(),

			  @ErrorState = ERROR_STATE()

	           

		RAISERROR(@ErrorMessage,@ErrorSeverity,@ErrorState) 

END CATCH	



		

GO
`;


/**
 * RAW SQL
 * DDL LOG
 */
const ddlLog = `
/**********************************************************************************
Here's a script that we use on SQL Servers at our client sites.

This will create a DDL trigger that traps the creation and modification of all the most significant 
SQL Server object types in a database occurring on one database, 
like CREATE TABLE, ALTER VIEW, and DROP PROC, etc..., and will log information about what was done,
when, and by whom. The table created to store this log can be queried and reported on
to track the history of table creation and modification in your database.

Run this script against any database whose object modification history you would like to track.

A Reporting Services report to display this history is included 
in your download from Computize! Consulting as a .rdl file
that you can add to any SSRS project in Visual Studio 2008 or that you can deploy
directly to a SQL Server Reporting Services server.
***********************************************************************************/


IF EXISTS (SELECT 0 FROM sys.tables WHERE name='tblDDLLog')
	DROP TABLE dbo.tblDDLLog

GO

--Create the table to store all the table modification events
CREATE TABLE dbo.tblDDLLog
		(EventID int IDENTITY(1,1)
		,SPID int
		,EventDate datetime
		,EventType varchar(200)
		,SQLText varchar(max)
		,DatabaseName sysname
		,SchemaName sysname
		,ObjectName sysname
		,LoginName sysname
		,UserName sysname
)

GO


--Drop the DDL trigger if it already exists
IF EXISTS (SELECT 0 FROM sys.server_triggers
    WHERE name = 'tr_DDLLogEvents')
DROP TRIGGER tr_DDLLogEvents
ON ALL SERVER;
GO


--Create the trigger.

CREATE TRIGGER tr_DDLLogEvents
ON DATABASE
FOR DDL_TABLE_EVENTS, DDL_VIEW_EVENTS, DDL_PROCEDURE_EVENTS, DDL_FUNCTION_EVENTS

--If you want to include any of the following events in your log, 
--remove just the '--' at the start of that event's line:
	
-- ,DDL_INDEX_EVENTS
-- ,DDL_STATISTICS_EVENTS
-- ,DDL_TRIGGER_EVENTS
-- ,DDL_SYNONYM_EVENTS
		
AS
DECLARE @data xml
SET @data =EVENTDATA()

INSERT INTO dbo.tblDDLLog(SPID
		,EventDate
		,EventType
		,SQLText
		, DatabaseName
		, SchemaName
		, ObjectName
		, LoginName
		, UserName)
VALUES( @@SPID
		,@data.value ('(/EVENT_INSTANCE/PostTime)[1]', 'datetime')
		,@data.value ('(/EVENT_INSTANCE/EventType)[1]', 'varchar(200)')
		,@data.value('(/EVENT_INSTANCE/TSQLCommand/CommandText)[1]', 'varchar(max)')
		,@data.value ('(/EVENT_INSTANCE/DatabaseName)[1]', 'varchar(200)')
		,@data.value ('(/EVENT_INSTANCE/SchemaName)[1]', 'varchar(200)')
		,@data.value ('(/EVENT_INSTANCE/ObjectName)[1]', 'varchar(200)')
		,SUSER_SNAME()
		,CURRENT_USER
		)	
GO


--This stored procedure will be referenced by the report you downloaded with this script
CREATE PROC uspDDLHistory
	@prmStartDate datetime=GetDate(), @prmEndDate datetime=GETDATE()
AS

--Retrieve all logged DDL activity between the date parameters 
SELECT [EventID]
      ,[SPID]
      ,[EventDate]
      ,[EventType]
      ,[SQLText]
      ,[DatabaseName]
      ,[SchemaName]
      ,[ObjectName]
      ,[LoginName]
      ,[UserName]
  FROM [tblDDLLog]
  --make sure to include everything that happened on the EndDate, regardless of its time
  WHERE EventDate BETWEEN @prmStartDate AND (CONVERT(varchar(12),@prmEndDate,112)+ ' 11:59:59')
  
GO
`;

/**
 * RAW SQL
 * ALL OBJECT PERMISSIONS
 */
const allObjectPermissions = `
/**********************************************************************************************************



This script will create a stored procedure that displays all 

tables, views, functions, and stored procedure (i.e. all securable user objects)

alongside which users and roles have explicit permissions on those objects, 

plus what those permissions are.



By default, this will list all securables that have permissions assigned. 

Parameters can be passed  to this stored procedure to filter on what objects, 

type of objects and permissions you're looking to list.



An interactive Reporting Services report to pass parameters and display the results of this stored proc 

has also been provided as an .rdl file inside the .zip'ed file you downloaded from The Lytic Group.

You can add that report to any SSRS project in Visual Studio or that you can deploy

directly to a SQL Server Reporting Services server.



Please let us know your feedback on this script at

info@lyticgroupcom

***********************************************************************************************************/





/******************************************************************

Object:  StoredProcedure [dbo].[uspListObjectPermissions]    

Script Date: 06/18/2020

Origin: Edward Heraux, The Lytic Group (Brooklyn, USA)

******************************************************************/



SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO



CREATE PROC [dbo].[uspAllObjectPermissions] @ObjectType varchar(20)=NULL, @ObjectName sysname=NULL, @Permission varchar(20)=NULL, @PermissionState varchar(8)=NULL

AS

SELECT @ObjectType=ISNULL(@ObjectType,'%'),@ObjectName=ISNULL(@ObjectName,'%'),@Permission=ISNULL(@Permission,'%'),@PermissionState=ISNULL(@PermissionState,'%')



SELECT OB.Name AS ObjectName

		,CASE OB.xtype 

			WHEN 'U' THEN 'Table' 

			WHEN 'P' THEN 'Stored Proc'

			WHEN 'V' THEN 'View'	

			WHEN 'FN' THEN 'Function'						

		END AS ObjectType	

	,PE.class_desc AS DatabaseOrObject, PE.Major_id AS ObjectID

	,PE.permission_name AS Permission, PE.state_desc AS PermissionState, PE.grantee_Principal_id AS PrincipalID 

	,PR.Name AS PrincipalName, PR.type_desc AS PrincipalType, PR.default_schema_name AS DefaultSchema 

		,PR.Modify_date AS DateModified

		, CASE PR.is_fixed_role WHEN 0 THEN 'Not Fixed Role' WHEN 1 THEN 'Fixed Role' END AS FixedRole

		

--There are only 3 tables necessary to assemble all permissions on all objects and the principals to whom they were given

FROM Sys.database_permissions AS PE 

	INNER JOIN sys.sysobjects OB ON PE.Major_id=OB.id

	INNER JOIN sys.database_principals AS PR ON PR.principal_id=PE.grantee_Principal_id



--Exclude system tables

WHERE OB.xtype <>'S'

	AND CASE OB.xtype 

			WHEN 'U' THEN 'Table' 

			WHEN 'P' THEN 'Stored Proc'

			WHEN 'V' THEN 'View'	

			WHEN 'FN' THEN 'Function'						

		END  LIKE @ObjectType

	AND OB.Name LIKE @ObjectName

	AND PE.permission_name LIKE @Permission

	AND PE.state_desc LIKE @PermissionState

ORDER BY ObjectName, PrincipalName	











/********************************************************************************

*This table-valued function returns one row with info about the current server.

This is included strictly to feed a header in the report included in your download.

**********************************************************************************/



IF OBJECT_ID (N'dbo.ufnServerInfo', N'IF') IS NOT NULL

    DROP FUNCTION dbo.ufnServerInfo

GO



ALTER FUNCTION dbo.ufnServerInfo()



/****************The Lytic Group, copyright, 2021*****************/

/****************Published June, 2020 *****************/

/*********from http://www.lyticgroup.com by Edward Heraux*****************/



RETURNS TABLE

AS

RETURN

--Grab server name and version info

SELECT SERVERPROPERTY('servername') AS ServerName

	, @@Version as SQLServerVersion

	, CONVERT(VARCHAR(100), serverproperty('Edition')) AS Edition

	, SERVERPROPERTY('productversion')AS Version



	, SERVERPROPERTY ('productlevel') AS ProductLevel

	,CONVERT(VARCHAR(100), SERVERPROPERTY ('LicenseType')) AS LicenseType

	

GO



SELECT * FROM dbo.ufnServerInfo()
`;

/**
 * RAW SQL
 * DB SIZE HISTORY
 */
const dbSizeHistory = `
/****************The Lytic Group, copyright, 2021*****************/

/****************Published March, 2021 *****************/

/*********from http://www.lyticgroup.com by Edward Heraux*****************/





USE [AdventureWorks]

GO

/****** Object:  StoredProcedure [dbo].[uspCheckDBSize]    Script Date: 05/11/2020 13:42:35 ******/

SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO

CREATE PROC [dbo].[uspLogDBSize]

 @AllDbs bit=1 --Whether to capture this data for all databases on this server at once (1)

				--or only the current datbase's info (0)

			



/************************************************************************************************

Schedule this to run weekly or monthly, and give yourself quick access to patterns in your databases' growth.

Store this proc in the database you're most likely to check up on the most, as that will be the default db

for which this proc captures size data, if you pass a parameter of 0.



This stored procedure stores snapshots of database size information at the time you run it,

either for all your databases or just the one from which you execute it.

Records go into a permanent table (dbo.tblSizeHistory), off of which you can run reports or just query

for size histories or trends.

Bundled below, however, are UDFs and a view that feed an SSRS report.



Also included with your download are SSRS reports named DBSizeDashboard2005.rdl and DBSizeDashboard2008.rdl,

which give you a graphical look at all the results from that user-defined function.



 *******************************************************************************************/

AS

SET NOCOUNT ON



 begin try 

	BEGIN TRAN

		IF NOT EXISTS (SELECT 1 FROM sys.sysobjects WHERE xtype='U' AND Name='tblDBSizeHistory')

			CREATE TABLE dbo.tblDBSizeHistory

				(DBName sysname

				,FileID int

				,FileSizeInMB money

				,SpaceUsedInMB money

				,FreeSpaceInMB money

				,LogicalFileName sysname

				,FilePath varchar(500)

				,AsOfDateTime datetime

				CONSTRAINT PK_PathAndTime PRIMARY KEY CLUSTERED(DBName,FilePath,AsOfDateTime))

		

			

		--Just for testing

		IF EXISTS (SELECT 1 FROM Tempdb.sys.sysobjects WHERE Name LIKE '#DBFileStats%')

			DROP TABLE #DBFileStats

		IF EXISTS (SELECT 1 FROM TempDB.sys.sysobjects WHERE Name LIKE '#DBList%')

			DROP TABLE #DBList 

			

		--Create a temp table of all databases on this server, which we will be looping through		

		SELECT dbid,Name INTO #DBList FROM master.sys.sysdatabases

	COMMIT	 

	--Variables for the loop

	DECLARE @counter int, @NumDatabases int

	DECLARE @DBName sysname

	DECLARE @SQL varchar(750), @CurrentDB sysname

	 

	--Set up values for the loop

	IF @AllDbs=1

		SELECT @NumDatabases=COUNT(*), @counter=1, @CurrentDB='%' FROM #DBlist

	ELSE

		SELECT @NumDatabases=1, @counter=1, @CurrentDB=DB_NAME() FROM #DBlist

	

	--Loop through the list of databases,

	-- inserting each one's filesize info into the tblDBSizeHistory permanent table	

	BEGIN TRAN		 

	  WHILE @Counter <= @NumDatabases

		BEGIN

			--There will only be one record in #DBList to loop through

			-- if an @AllDBs parameter of 1 was passed 

			SELECT TOP 1 @DBName=Name FROM #DBList WHERE Name LIKE @CurrentDB 

			--Insert a row for each file of the current database

			SET @SQL = 'USE ' + @DBName  

				+ ' INSERT INTO ' +DB_NAME() + '.dbo.tblDBSizeHistory 

				SELECT ''' + @DBName  + ''' AS DBName, FileID

			  ,convert(decimal(12,2),round(size/128.000,2)) AS FileSizeInMB

				,convert(decimal(12,2),round(fileproperty(name,''SpaceUsed'')/128.000,2))AS SpaceUsedInMB

				,convert(decimal(12,2),round((size-fileproperty(name,''SpaceUsed''))/128.000,2)) AS FreeSpaceInMb

				,NAME AS LogicalFileName, Filename AS FilePath

				,Getdate() AS AsOfDateTime

				FROM ' + @DBName + '.sys.sysfiles'

			EXECUTE(@SQL)

			DELETE FROM #DBList WHERE Name=@DBName

			SET @counter=@counter+1

		END   

		

		--Just for testing, show the results (i.e. the most recent file sizes)

		--SELECT CONVERT(varchar(20),AsOfDateTime,100) AS RunTimeToMinute

		--,CONVERT(varchar(20),(SELECT MAX(AsOfDateTime) FROM dbo.tblDBSizeHistory),100) AS MaxTime

		--,* 

		--FROM dbo.tblDBSizeHistory 

		--WHERE CONVERT(varchar(20),AsOfDateTime,100)=CONVERT(varchar(20),(SELECT MAX(AsOfDateTime) FROM dbo.tblDBSizeHistory),100)

	COMMIT

end try 



begin catch 

	--We're going to refer to these variables in a RAISERROR command

	DECLARE @ErrorMessage NVARCHAR(4000)

	DECLARE @ErrorSeverity INT

	DECLARE @ErrorState INT



	SELECT @ErrorMessage = 'Error number ' + CAST(ERROR_NUMBER() AS varchar(10)) +': ' + ERROR_MESSAGE(),

		  @ErrorSeverity = ERROR_SEVERITY(),

		  @ErrorState = ERROR_STATE()

           

	RAISERROR(@ErrorMessage,@ErrorSeverity,@ErrorState) 

	ROLLBACK TRAN

end catch 



GO



/*********************************************************************************

This table-valued function will feed one of the datasets

 for the reports included in your download.

*********************************************************************************/



CREATE FUNCTION dbo.ufnDBSizeHistory 

(	@StartDate datetime, @EndDate datetime

)

/****************The Lytic Group, copyright, 2021*****************/

/****************Published March, 2021 *****************/

/*********from http://www.lyticgroup.com by Edward Heraux*****************/



/*Find all the size records time-stamped between the two date parameters*/

RETURNS TABLE 

AS

RETURN 

	SELECT *, SpaceUsedInMB/FileSizeInMB AS PercentFull

		,CASE RIGHT(FilePath,3) WHEN 'ldf' THEN 'Log File' ELSE 'Data File' END AS FileType 

	FROM dbo.tblDBSizeHistory

	WHERE CONVERT(char(12),AsOfDateTime) BETWEEN CONVERT(char(12),@StartDate) AND CONVERT(char(12),@EndDate)

GO







/****************The Lytic Group, copyright, 2021*****************/

/****************Published March, 2021 *****************/

/***





/********************************************************************************

This table-valued function returns one row with info about the current server.

This is included strictly to feed a header in the included reports.

**********************************************************************************/



IF OBJECT_ID (N'dbo.ufnServerInfo', N'IF') IS NOT NULL

    DROP FUNCTION dbo.ufnServerInfo

GO



CREATE FUNCTION dbo.ufnServerInfo()

******from http://www.lyticgroup.com by Edward Heraux*****************/



RETURNS TABLE

AS

RETURN

--Grab server name and version info

SELECT SERVERPROPERTY('servername') AS ServerName

	, @@Version as SQLServerVersion

	, CONVERT(VARCHAR(100), serverproperty('Edition')) AS Edition

	, SERVERPROPERTY('productversion')AS Version



	, SERVERPROPERTY ('productlevel') AS ProductLevel

	,CONVERT(VARCHAR(100), SERVERPROPERTY ('LicenseType')) AS LicenseType

	

GO



/*************************************************************************************/

/*For a couple of the graphs included in the report, 

find the most recent file sizes */

**************************************************************************************/



CREATE VIEW [dbo].vLatestDBSizes 

AS

/****************The Lytic Group, copyright, 2021*****************/

/****************Published March, 2021 *****************/

/*********from http://www.lyticgroup.com by Edward Heraux*****************/





SELECT M.DBName, M.FilePath, M.LatestTimestamp 

	,CASE RIGHT(H.FilePath,3) WHEN 'ldf' THEN 'Log File' ELSE 'Data File' END AS FileType

	,H.FileSizeInMB, H.SpaceUsedInMB,H.LogicalFileName, H.SpaceUsedInMB/H.FileSizeInMB AS PercentFull

FROM tblDBSizeHistory AS H

	INNER JOIN

		(SELECT DBName, FilePath

		,MAX(AsOfDateTime) AS LatestTimestamp 

		FROM tblDBSizeHistory 

		GROUP BY  DBName,FilePath) AS M

	ON M.DBName=H.DBName AND H.AsOfDateTime=M.LatestTimestamp AND H.FilePath=M.FilePath
`;

export const SQL_TEMPLATE_STRINGS = {
  storeActivityMonitorData,
  uploadStatisticsByAge,
  autoRebuildIndexes,
  jobSummary,
  ddlLog,
  allObjectPermissions,
  dbSizeHistory
};