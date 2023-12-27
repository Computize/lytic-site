import { HomePageCarousel } from '~/app/components/homePage/homePageCarousel';
import { WhatWeDo } from '~/app/components/homePage/whatWeDo';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomePageCarousel />
      <WhatWeDo />
    </main>
  );
}
