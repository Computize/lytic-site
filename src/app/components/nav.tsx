'use server';
import React from 'react';
import Link from 'next/link';

export async function Nav() {
  return (
    <header className="sticky top-0 z-50 w-7/12 shadow-black shadow-2xl">
      <nav>
        <div className="flex items-center justify-between p-2">
          <Link href="/blog">BLOG</Link>
          <Link href="/script">SCRIPT LIBRARY</Link>
          <Link href="/video_library">VIDEO LIBRARY</Link>
          <Link href="/">~COMPANY LOGO~</Link>
          <Link href="/services">SERVICES (NOT WORKING)</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </nav>
    </header>
  );
}
