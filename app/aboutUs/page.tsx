
//The whole purpose of this tsx file is to 
//have a second URL for a page that mirrors the About page. 
// This is only necessary because the QR code on current Lytic Group business cards
// points to /aboutUs instead of /about

// app/our-people-presidents-blog/page.tsx
import React from 'react';
import { OurPeoplePresidentsBlog } from '~/app/components/homePage/ourPeoplePresidentsBlog';

export const metadata = {
  title: "Our People & President's Blog",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center py-12">
      <OurPeoplePresidentsBlog />
    </main>
  );
}