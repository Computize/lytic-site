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
      <div className="bg-background-green w-full h-[5px] flex items-center justify-center">
        <div className="border-t-[1px] border-gray-500 w-11/12" />
      </div>
      <SasImageAndText />
      <ApproachPeopleBlogContainer />
      <ScriptLibrary />
      <Testimonials />
      <Headquarters />
    </main>
  );
}
