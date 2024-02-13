import { ScrollArea } from '@radix-ui/react-scroll-area';
import { SQL_TEMPLATE_STRINGS } from '~/app/components/scriptPage/dynamicScripts/sqlMarkDown';

interface RenderSqlProps {
  fileName: string;
}

export const RenderSql = ({ fileName }: RenderSqlProps) => {
  const { allObjectPermissions, autoRebuildIndexes, dbSizeHistory, ddlLog, jobSummary, storeActivityMonitorData, uploadStatisticsByAge } = SQL_TEMPLATE_STRINGS;
  let codeBlock = ``;
  switch (fileName) {
    case 'uspStoreActivityMonitorData.sql.zip':
      codeBlock = storeActivityMonitorData;
      break;
    case 'UpdateOldStatistics.zip':
      codeBlock = uploadStatisticsByAge;
      break;
    case 'uspReIndexTables.zip':
      codeBlock = autoRebuildIndexes;
      break;
    case 'uspJobSummary.zip':
      codeBlock = jobSummary;
      break;
    case 'tr_LogDDLEvents.zip':
      codeBlock = ddlLog;
      break;
    case 'AllObjectPermissions.zip':
      codeBlock = allObjectPermissions;
      break;
    case 'DBSizeHistory.zip':
      codeBlock = dbSizeHistory;
      break;
  }
  return (
    <div className="border-2 rounded p-4 text-[9px] h-[400px] w-full overflow-y-scroll overflow-x-scroll">
      {
        <pre>
          <code>{codeBlock}</code>
        </pre>
      }
    </div>
  );
};
