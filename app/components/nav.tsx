'use server';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export async function Nav() {
  return (
    <header className="sticky top-0 z-50  mt-10 shadow-black shadow-2xl">
      <nav>
        <div className="flex items-center justify-between p-2">
          <div>
            <Link href="/blog">BLOG</Link>
            <Link href="/script">SCRIPT LIBRARY</Link>
            <Link href="/video_library">VIDEO LIBRARY</Link>
          </div>
          <div className="px-20">
            <Image src="/main-logo.png" width={180} height={180} quality={100} alt="Lytic Group Logo" />
          </div>
          <div>
            <Link href="/services">SERVICES (NOT WORKING)</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
