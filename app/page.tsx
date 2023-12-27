import { HomePageCarousel } from '~/app/components/homePageCarousel';
import { WhatWeDo } from '~/app/components/whatWeDo';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomePageCarousel />
      <WhatWeDo />
    </main>
  );
}
