import { OurMission } from '~/app/components/about/ourMission';
import { OurStory } from '~/app/components/about/ourStory';
import { SomeOfOurClients } from '~/app/components/about/someOfOurClients';
import { PageBlurb } from '~/app/components/pageBlurb';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { generateMetadata } from '~/app/constants/pageMetadata';

export const metadata = generateMetadata('About');

export default function Page() {
  const blurbString = 'The Lytic Group are architects of data \n and business intelligence solutions. \n Planning, surfacing, optimizing, & monitoring \n your most valuable data.';
  return (
    <main className="mb-14">
      <PageUpperImageContainer
        imageSource="/aboutus-page-banner.png"
        className="h-[262px]"
      >
        <PageBlurb
          className="drop-shadow-lg text-lg px-10 md:px-0 md:text-4xl text-left max-w-3xl mr-10 lg:mr-64"
          blurb={blurbString}
        />
      </PageUpperImageContainer>
      <div className="flex justify-center">
        <OurStory />
      </div>
      <div className="flex justify-center mb-20">
        <p className="text-xl text-center font-bold">“We lead with transparency, expertise, and clear communication”</p>
      </div>
      <OurMission />
      <SomeOfOurClients />
    </main>
  );
}
