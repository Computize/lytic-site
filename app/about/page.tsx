'use server';
import { OurMission } from '~/app/components/about/ourMission';
import { OurStory } from '~/app/components/about/ourStory';
import { SomeOfOurClients } from '~/app/components/about/someOfOurClients';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default async function Page() {
  return (
    <main className="mb-14">
      <PageUpperImageContainer>
        <div
          className="w-full h-full flex items-center"
          style={{
            backgroundImage: "url('/aboutus-page-banner.png')",
          }}
        >
          <p className="text-4xl text-white max-w-6xl mx-[200px] font-bold">
            The Lytic Group are architects of data <br /> and business intelligence solutions. <br /> Planning, surfacing, optimizing, & monitoring <br /> your most valuable data.
          </p>
        </div>
      </PageUpperImageContainer>
      <div className="flex justify-center">
        <OurStory />
      </div>
      <div className="flex justify-center mb-20">
        <p className="text-xl font-bold">“We lead with transparency, expertise, and clear communication”</p>
      </div>
      <OurMission />
      <SomeOfOurClients />
    </main>
  );
}
