import { AccordionList } from '~/app/components/starterPackages/accordionList';
import { StarterPackagesCard } from '~/app/components/starterPackages/starterPackagesCard';

const accordionList03 = ['Data ingest', 'ETL/ELT', 'Analytics layer', 'Query optimization', 'Dashboard', 'User/group-level security', 'Concurrency testing'];
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
export const StarterPackagesCardsContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-10 mb-10">
      <StarterPackagesCard footerContent="We'll show you what Synapse is capable of, by doing an end-to-end build of a BI solution with your own data, including" subTitle=" Easing your way into your first cloud data warehouse in Azure." title="Data Warehouse Proof of Concept" imageSource="/Shape1.png" packagePrice="14,999">
        {listItems00.map(({ listItems, title }, idx) => {
          return <AccordionList key={idx} listItems={listItems} title={title} />;
        })}
      </StarterPackagesCard>
      <StarterPackagesCard footerContent="Let us work with your data stewards to document the path from your current silo'ed data sources to a BI- and analytics-ready data warehouse or data lake." subTitle="Help convincing top management to sponsor data lake/data warehouse project." title="Data Warehousing/Lake Readiness Assessment" imageSource="/Shape2.png" packagePrice="7,499">
        {listItems01.map(({ listItems, title }, idx) => {
          return <AccordionList key={idx} listItems={listItems} title={title} />;
        })}
      </StarterPackagesCard>
    </div>
  );
};
