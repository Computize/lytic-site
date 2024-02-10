import { HomePageCarousel } from '~/app/components/homePage/homePageCarousel';
import { WhatWeDo } from '~/app/components/homePage/whatWeDo';
import { ScriptLibrary } from '~/app/components/homePage/scriptLibrary';
import { Testimonials } from '~/app/components/homePage/testimonials';
import { Headquarters } from '~/app/components/homePage/headquarters';
import { SasImageAndText } from '~/app/components/homePage/sasImageAndText';
import { OurPeoplePresidentsBlog } from '~/app/components/homePage/ourPeoplePresidentsBlog';
import { OurApproach } from '~/app/components/homePage/ourApproach';
import { CoreTechnologies } from '~/app/components/homePage/coreTechnologies';
import { generateMetadata } from '~/app/constants/pageHeading';

export const metadata = generateMetadata('Home');

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomePageCarousel />
      <WhatWeDo />
      <CoreTechnologies isOnHomePage={true} />

      <SasImageAndText />
      <OurApproach />
      <div className="flex flex-col justify-center items-center w-full md:w-9/12 gap-8">
        <OurPeoplePresidentsBlog />
      </div>
      <ScriptLibrary />
      <Testimonials />
      <Headquarters />
    </main>
  );
}
