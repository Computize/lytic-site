import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { StarterPackagesCardsContainer } from '~/app/components/starterPackages/starterPackagesCardsContainer';

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
      <StarterPackagesCardsContainer />
    </main>
  );
}
