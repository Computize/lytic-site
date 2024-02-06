'use client';
import React from 'react';
import Link from 'next/link';
import { ServicesDropDown } from '~/app/components/layout/servicesDropDown';

export function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollYPosition = window.scrollY;
      setIsScrolled(scrollYPosition > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled ? 'bg-white fixed shadow-black shadow-2xl' : ''} w-full top-0 z-50 fixed justify-center`}>
      <nav className="flex justify-center">
        <div className="w-10/12 text-xs font-bold flex justify-evenly items-center py-4">
          <div className="flex flex-row justify-around w-full">
            <Link className="" href="/blog">
              BLOG
            </Link>
            <Link className="" href="/script">
              SCRIPT LIBRARY
            </Link>
            <Link className="" href="/video_library">
              VIDEO LIBRARY
            </Link>
          </div>
          <div className="px-14">
            <Link href="/">
              <img src="/main-logo.png" alt="Lytic Group Logo" height="auto" width="400px" />
              {/* <Image src="/main-logo.png" width={180} height={180} quality={100} alt="Lytic Group Logo" /> */}
            </Link>
          </div>
          <div className="flex justify-around w-full">
            <ServicesDropDown />
            <Link className="" href="/about">
              ABOUT
            </Link>
            <Link className="" href="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
