import { ScrollArea } from '@radix-ui/react-scroll-area';
import Markdown from 'markdown-to-jsx';

interface RenderSqlProps {
  fileName: string;
}

export const RenderSql = ({ fileName }: RenderSqlProps) => {
  console.log(fileName);
  let codeBlock = ``;
  switch (fileName) {
    case 'uspStoreActivityMonitorData.sql.zip':
      return (codeBlock = `/****************The Lytic Group, copyright, 2021*****************

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
        `);
    case 'UpdateOldStatistics.zip':
      console.log('UpdateOldStatistics.zip');
      break;
    case 'uspReIndexTables.zip':
      console.log('uspReIndexTables.zip');
      break;
    case 'uspJobSummary.zip':
      console.log('uspJobSummary.zip');
      break;
    case 'tr_LogDDLEvents.zip':
      console.log('tr_LogDDLEvents.zip');
      break;
    case 'AllObjectPermissions.zip':
      console.log('AllObjectPermissions.zip');
      break;
    case 'DBSizeHistory.zip':
      console.log('DBSizeHistory.zip');

      break;
  }
  return <ScrollArea className="h-[200px] p-4">{codeBlock}</ScrollArea>;
};
