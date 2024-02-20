'use server';
import Link from 'next/link';

import React from 'react';

export async function Footer() {
  return (
    <footer className="h-auto py-10 flex flex-col gap-4 items-center  bg-background-dark-gray">
      <Link href="/">
        <img
          src="/main-logo.png"
          alt="Lytic Group Logo"
          className="h-16"
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
          href="/service"
        >
          SERVICES
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
      <div className="border-t-2 w-11/12 border-primary-gray" />
      <div className="flex w-9/12 flex-row gap-4 justify-center md:justify-between items-center text-primary-gray text-xs">
        <div className="w-full flex items-center justify-center">
          <p className="text-center">© 2020 The Lytic Group. All Rights w-full Reserved</p>
        </div>
      </div>
    </footer>
  );
}
