'use server';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export async function Footer() {
  return (
    <footer className="h-[355px] py-[60px] flex flex-col gap-4 items-center  bg-background-dark-gray">
      <Link href="/">
        <Image
          src="/main-logo.png"
          width={280}
          height={180}
          quality={100}
          alt="Lytic Group Logo"
        />
      </Link>

      <div className="flex flex-col sm:flex-row text-primary-gray gap-6 items-center justify-evenly">
        <Link
          className="text-sm"
          href="/blog"
        >
          BLOG
        </Link>
        <Link
          className="text-sm"
          href="/script"
        >
          SCRIPT LIBRARY
        </Link>
        <Link
          className="text-sm"
          href="/video_library"
        >
          VIDEO LIBRARY
        </Link>
        <Link
          className="text-sm"
          href="/services"
        >
          SERVICES (NOT WORKING)
        </Link>
        <Link
          className="text-sm"
          href="/about"
        >
          ABOUT
        </Link>
        <Link
          className="text-sm"
          href="/contact"
        >
          CONTACT
        </Link>
      </div>
      <div className="border-t-2 w-6/12 border-primary-gray"></div>
      <div>
        <p className="text-primary-gray text-xs pt-4">© 2020 The Lytic Group. All Rights Reserved</p>
      </div>
    </footer>
  );
}
