import { HomePageCarousel } from '~/app/components/homePage/homePageCarousel';
import { Technologies } from '~/app/components/homePage/technologies';
import { WhatWeDo } from '~/app/components/homePage/whatWeDo';
import { OurApproachOurPeopleContainer } from './components/homePage/ourApproachOurPeopleContainer';
import { ScriptLibrary } from '~/app/components/homePage/scriptLibrary';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomePageCarousel />
      <WhatWeDo />
      <Technologies />
      <OurApproachOurPeopleContainer />
      <ScriptLibrary />
    </main>
  );
}
