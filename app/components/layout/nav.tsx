'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <header className={isScrolled ? 'bg-white w-10/12 top-0 z-50 fixed shadow-black shadow-2xl' : 'w-10/12 top-0 z-50 fixed'}>
      <nav>
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-row gap-4 pl-3">
            <Link className="text-sm" href="/blog">
              BLOG
            </Link>
            <Link className="text-sm" href="/script">
              SCRIPT LIBRARY
            </Link>
            <Link className="text-sm" href="/video_library">
              VIDEO LIBRARY
            </Link>
          </div>
          <div>
            <Link href="/">
              <Image src="/main-logo.png" width={180} height={180} quality={100} alt="Lytic Group Logo" />
            </Link>
          </div>
          <div className="flex justify-end  gap-4 pr-3">
            <Link className="text-sm" href="/services">
              SERVICES (NOT WORKING)
            </Link>
            <Link className="text-sm" href="/about">
              ABOUT
            </Link>
            <Link className="text-sm" href="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
