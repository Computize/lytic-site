import { HomePageCarousel } from '~/app/components/homePage/homePageCarousel';
import { Technologies } from '~/app/components/homePage/technologies';
import { WhatWeDo } from '~/app/components/homePage/whatWeDo';
import { ApproachPeopleBlogContainer } from '~/app/components/homePage/approachPeopleBlogContainer';
import { ScriptLibrary } from '~/app/components/homePage/scriptLibrary';
import { Testimonials } from '~/app/components/homePage/testimonials';
import { Headquarters } from '~/app/components/homePage/headquarters';
import { SasImageAndText } from '~/app/components/homePage/sasImageAndText';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomePageCarousel />
      <WhatWeDo />
      <Technologies />
      <SasImageAndText />
      <ApproachPeopleBlogContainer />
      <ScriptLibrary />
      <Testimonials />
      <Headquarters />
    </main>
  );
}
