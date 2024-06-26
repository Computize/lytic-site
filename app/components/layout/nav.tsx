'use client';
import React from 'react';
import Link from 'next/link';
import { ServicesDropDown } from '~/app/components/layout/servicesDropDown';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '~/components/ui/dropdown-menu';
import { MenuSquare } from 'lucide-react';

export function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    if (window.scrollY > 70) {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      const scrollYPosition = window.scrollY;
      setIsScrolled(scrollYPosition > 70);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-gradient-to-b from-white from-20% w-full top-0 z-51 h-40 flex justify-center absolute`}>
      <header className={`${isScrolled ? 'bg-white top-0 z-50 fixed shadow-black shadow-2xl' : 'top-0 z-50 fixed '} w-full md:w-10/12 lg:w-8/12`}>
        <nav className="hidden md:hidden lg:block">
          <div className="text-xs font-bold flex justify-evenly items-center  w-full py-4">
            <div className="flex flex-row justify-evenly w-full">
              <Link
                className=""
                href="/blog"
              >
                BLOG
              </Link>
              <Link
                className=""
                href="/script"
              >
                SCRIPT LIBRARY
              </Link>
              <Link
                className=""
                href="/video_library"
              >
                VIDEO LIBRARY
              </Link>
            </div>
            <div className="px-14">
              <Link href="/">
                <img
                  src="/main-logo.png"
                  alt="Lytic Group Logo"
                  height="auto"
                  width="400px"
                />
              </Link>
            </div>
            <div className="flex justify-evenly w-full">
              <ServicesDropDown />
              <Link
                className=""
                href="/about"
              >
                ABOUT
              </Link>
              <Link
                className=""
                href="/contact"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </nav>

        {/* MOBILE NAV */}
        <nav className="block lg:hidden px-10">
          <div className="text-xs font-bold flex justify-between w-full py-4">
            <div className="">
              <Link href="/">
                <img
                  src="/main-logo.png"
                  alt="Lytic Group Logo"
                  height="auto"
                  width="150px"
                />
              </Link>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MenuSquare
                  color="#9bbc5a"
                  className="hover:cursor-pointer hover:bg-gray-200 rounded-md"
                  size={35}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <Link href="/blog">
                  <DropdownMenuItem> Blog</DropdownMenuItem>
                </Link>
                <Link href="/script">
                  <DropdownMenuItem>Script Library</DropdownMenuItem>
                </Link>
                <Link
                  className="block w-full justify-cente
                    "
                  href="/video_library"
                >
                  <DropdownMenuItem>Video Library</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>Services</DropdownMenuLabel>
                <Link
                  className=""
                  href="/our_approach"
                >
                  <DropdownMenuItem>Our Approach</DropdownMenuItem>
                </Link>
                <Link
                  className=""
                  href="/service"
                >
                  <DropdownMenuItem>Core Technologies</DropdownMenuItem>
                </Link>
                <Link
                  className=""
                  href="/starter_packages"
                >
                  <DropdownMenuItem>Starter Packages</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link
                  className=""
                  href="/about"
                >
                  <DropdownMenuItem>About</DropdownMenuItem>
                </Link>
                <Link
                  className=""
                  href="/contact"
                >
                  <DropdownMenuItem>Contact</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
    </div>
  );
}
