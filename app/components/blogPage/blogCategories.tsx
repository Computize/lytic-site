import Link from 'next/link';

export enum BlogCategory {
  SHAREPOINT_OFFICE_365 = 'Sharepoint/Office 365',
  CONSULTING = 'Consulting',
  SQL_SERVER_DATABASE = 'SQL Server Database',
  ANALYTICS_B_I = 'Analytics, B.I.',
  ETL = 'ETL',
}

export function BlogCategories() {
  return (
    <div className="flex flex-col w-3/12 gap-2">
      <p className="text-xl font-bold">CATEGORIES:</p>
      {Object.values(BlogCategory).map((category, idx) => {
        return (
          <Link
            href={''}
            key={idx}
            className="text-xl hover:underline hover:font-bold"
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}
