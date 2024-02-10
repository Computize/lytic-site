import { AccordionList } from '~/app/components/starterPackages/accordionList';
import { StarterPackagesCard } from '~/app/components/starterPackages/starterPackagesCard';

interface PackageAndDetails {
  title: string;
  subTitle: string;
  footerContent: string;
  imageSource: string;
  packagePrice: string;
  detailsList: Array<TitleAndListItems>;
}
interface TitleAndListItems {
  title: string;
  listItems: Array<string>;
}
const listItems00: Array<TitleAndListItems> = [
  { title: 'Goals', listItems: ['Clear statement of what the solution is to prove'] },
  { title: 'Time', listItems: ['Two weeks to delivery'] },
  { title: 'End-to-end workspace', listItems: ['Data ingest', 'ETL/ELT', 'Analytics layer', 'Query optimization', 'Dashboard', 'User/group-level security', 'Concurrency testing'] },
  { title: 'Included data content', listItems: ['Single dashboard', 'Single fact table', 'Up to 10 dimension tables'] },
  { title: 'Documentation of results', listItems: ['Performance metrics', 'Workload costs', 'Result interpretation', 'Recommendations for improvement'] },
];
const listItems01: Array<TitleAndListItems> = [
  { title: 'Data Hygiene needs', listItems: [] },
  { title: 'Azure commitment & licensing', listItems: [] },
  { title: 'Compatibility of diverse data sources', listItems: [] },
  { title: 'Data volume', listItems: [] },
  { title: 'Compliance of the Azure data platform', listItems: [] },
];
const listItems02: Array<TitleAndListItems> = [
  { title: 'Data Warehouse architecture', listItems: ['Configuring Azure data storage', 'Configuring Compute'] },
  { title: 'Azure commitment & licensing', listItems: ['ELT', 'Azure Data Factory', 'Data Bricks'] },
  { title: 'Querying Data', listItems: ['EQuerying & Scripting in Synapse', 'EAnalytic cubes with Azure Analysis Services', 'EAScheduling refreshes'] },
  { title: 'Reporting', listItems: ['EConnecting reporting tools to your DW', 'E(Power BI, Tableau, etc)'] },
  { title: '', listItems: ['Follow-on mentoring and project supervision is also available.'] },
];
const listItems03: Array<TitleAndListItems> = [
  { title: 'Performance Monitoring', listItems: ['Reports', 'Alerts'] },
  { title: 'Consumption & Usage Analysis', listItems: ['Documentation of peak times', 'Quantifying workloads', 'Resource requirements'] },
  { title: 'Cost Analysis', listItems: ['Trends', 'Savings opportunities'] },
  { title: 'Recommendations', listItems: ['Upgrades', 'Resource Scheduling', 'Maintenance Job'] },
  { title: 'Break/Fix Support', listItems: ['(additional fee)'] },
];

const packageAndDetails00: PackageAndDetails = {
  title: 'Data Warehouse Proof of Concept',
  subTitle: ' Easing your way into your first cloud data warehouse in Azure.',
  footerContent: "We'll show you what Synapse is capable of, by doing an end-to-end build of a BI solution with your own data, including",
  imageSource: '/Shape1.png',
  packagePrice: '14,999',
  detailsList: listItems00,
};
const packageAndDetails01: PackageAndDetails = {
  title: 'Data Warehousing/Lake Readiness Assessment',
  subTitle: 'Help convincing top management to sponsor data lake/data warehouse project.',
  footerContent: "Let us work with your data stewards to document the path from your current silo'ed data sources to a BI- and analytics-ready data warehouse or data lake.",
  imageSource: '/Shape2.png',
  packagePrice: '7,499',
  detailsList: listItems01,
};
const packageAndDetails02: PackageAndDetails = {
  title: 'Cloud Data Training & Mentoring',
  subTitle: 'Data teams looking to create their own cloud analytics architecture.',
  footerContent: 'The Lytic Group team includes Microsoft-Certified Trainers (MCTs) and experienced data architects that can guide your data stewards and database administrators in how to build out their own Azure cloud-based data warehouse or data lake.',
  imageSource: '/Shape3.png',
  packagePrice: '2,999',
  detailsList: listItems02,
};
const packageAndDetails03: PackageAndDetails = {
  title: 'Post-Implementation Managed Support',
  subTitle: 'New Azure data warehouse customers concerned with durability and costs.',
  footerContent: 'Once your data warehouse is in place on the Azure platform, a Lytic Group specialist can be assigned to monitor and help ensure its continued success.',
  imageSource: '/Shape4.png',
  packagePrice: '999 monthly',
  detailsList: listItems03,
};
const arrayOfPackages: Array<PackageAndDetails> = [packageAndDetails00, packageAndDetails01, packageAndDetails02, packageAndDetails03];

export const StarterPackagesCardsContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-10 mb-10">
      {arrayOfPackages.map(({ detailsList, footerContent, imageSource, packagePrice, subTitle, title }, idx) => {
        return (
          <StarterPackagesCard
            key={idx}
            title={title}
            subTitle={subTitle}
            footerContent={footerContent}
            imageSource={imageSource}
            packagePrice={packagePrice}
          >
            <div className="flex flex-wrap gap-6 justify-between">
              {detailsList.map(({ listItems, title }, idx) => {
                return (
                  <AccordionList
                    key={idx}
                    listItems={listItems}
                    title={title}
                  />
                );
              })}
            </div>
          </StarterPackagesCard>
        );
      })}
    </div>
  );
};
