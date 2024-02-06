import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { AccordionList } from '~/app/components/starterPackages/accordionList';
import { StarterPackagesCard } from '~/app/components/starterPackages/starterPackagesCard';

const accordionList3 = ['Data ingest', 'ETL/ELT', 'Analytics layer', 'Query optimization', 'Dashboard', 'User/group-level security', 'Concurrency testing'];

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <PageUpperImageContainer imageSource="/star_packeges-banner.png">
        <PageTitle title="STARTER PACKAGES" />
      </PageUpperImageContainer>

      <p className="text-gray-600 text-2xl h-auto py-12 w-full font-bold text-center">
        At whatever stage of migrating data to the cloud your organization finds itself.
        <br />
        The Lytic Group offers several simple solutions to get you to the next step in your data analytics journey.
      </p>

      {/* CARDS */}
      <div className="w-full h-auto flex flex-col justify-center items-center mb-10">
        <StarterPackagesCard footerContent="We'll show you what Synapse is capable of, by doing an end-to-end build of a BI solution with your own data, including" subTitle=" Easing your way into your first cloud data warehouse in Azure." title="Data Warehouse Proof of Concept" imageSource="/Shape1.png" packagePrice="14,999">
          <AccordionList title="Goals" listItems={['Clear statement of what the solution is to prove']} />
          <AccordionList title="Time" listItems={['Clear statement of what the solution is to prove']} />
          <AccordionList title="End-to-end workspace" listItems={accordionList3} />
          <AccordionList title="Included data content" listItems={['Clear statement of what the solution is to prove']} />
          <AccordionList title="Documentation of results" listItems={['Clear statement of what the solution is to prove']} />
        </StarterPackagesCard>
      </div>
    </main>
  );
}
