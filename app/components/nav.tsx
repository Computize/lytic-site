'use server';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export async function Nav() {
  return (
    <header className="px-20 sticky w-8/12 top-0 z-50  mt-10 shadow-black shadow-2xl">
      <nav>
        <div className="flex items-center justify-evenly p-2">
          <Link className="text-sm" href="/blog">
            BLOG
          </Link>
          <Link className="text-sm" href="/script">
            SCRIPT LIBRARY
          </Link>
          <Link className="text-sm" href="/video_library">
            VIDEO LIBRARY
          </Link>
          <div className="">
            <Image src="/main-logo.png" width={180} height={180} quality={100} alt="Lytic Group Logo" />
          </div>
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
      </nav>
    </header>
  );
}
