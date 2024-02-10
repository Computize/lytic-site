import { LetsTalk } from '~/app/components/ourApproachPage/letsTalk';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { StarterPackagesCardsContainer } from '~/app/components/starterPackages/starterPackagesCardsContainer';
import { generateMetadata } from '~/app/constants/pageHeading';

export const metadata = generateMetadata('Starter Packages');

export default function Page() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <PageUpperImageContainer
        imageSource="/star_packeges-banner.png"
        className="h-[362px]"
      >
        <PageTitle
          title="STARTER PACKAGES"
          className="text-center"
        />
      </PageUpperImageContainer>

      <p className="text-gray-600 text-2xl h-auto py-12 w-10/12 md:w-full font-bold text-center">
        At whatever stage of migrating data to the cloud your organization finds itself.
        <br />
        The Lytic Group offers several simple solutions to get you to the next step in your data analytics journey.
      </p>
      <StarterPackagesCardsContainer />
      <div className="flex flex-col w-full gap-10 justify-center items-center pb-40">
        <div className="border-t-[1px]  border-gray-400 w-10/12" />
        <p className="text-gray-500 text-xl">pricing is per Synapse Workspace or data warehouse</p>
      </div>
      <LetsTalk
        heading="LET'S TALK"
        bgColor="bg-background-green"
      />
    </main>
  );
}
