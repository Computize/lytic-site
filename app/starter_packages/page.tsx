import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { StarterPackagesCard } from '~/app/components/starterPackages/starterPackagesCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card';

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
        <StarterPackagesCard footerContent="We'll show you what Synapse is capable of, by doing an end-to-end build of a BI solution with your own data, including" subTitle=" Easing your way into your first cloud data warehouse in Azure." title="Data Warehouse Proof of Concept" imageSource="/Shape1.png">
          <p>thinonasdokasndokn</p>
        </StarterPackagesCard>
      </div>
    </main>
  );
}
