import { OurStory } from '~/app/components/about/ourStory';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default async function Page() {
  return (
    <main>
      <PageUpperImageContainer>
        <div className="bg-primary-green w-full h-full flex items-center">
          <p className="text-3xl text-white max-w-6xl mx-[200px] font-bold">The Lytic Group are architects of data and business intelligence solutions. Planning, surfacing, optimizing, & monitoring your most valuable data.</p>
        </div>
      </PageUpperImageContainer>
      <OurStory />
    </main>
  );
}
