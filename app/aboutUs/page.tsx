
//The whole purpose of this tsx file is to 
//have a second URL for a page that mirrors the About page. 
// This is only necessary because the QR code on current Lytic Group business cards
// points to /aboutUs instead of /about

// app/aboutUs/page.tsx
import type { Metadata } from 'next';
import { OurMission } from '~/app/components/about/ourMission';
import { OurStory } from '~/app/components/about/ourStory';
import { SomeOfOurClients } from '~/app/components/about/someOfOurClients';
import { PageBlurb } from '~/app/components/pageBlurb';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { generateMetadata } from '~/app/constants/pageMetadata';

export const metadata = generateMetadata('About Us');
 
export default function Page() {
  const blurbString = 'The Lytic Group are architects of data...';
  return (
    <main className="mb-14">
      <PageUpperImageContainer imageSource="/aboutus-page-banner.png" className="h-[262px]">
        <PageBlurb className="..." blurb={blurbString} />
      </PageUpperImageContainer>
      <div className="flex justify-center">
        <OurStory />
      </div>
      <div className="flex justify-center mb-20">
        <p className="text-xl text-center font-bold">“We lead with transparency...”</p>
      </div>
      <OurMission />
      <SomeOfOurClients />
    </main>
  );
}