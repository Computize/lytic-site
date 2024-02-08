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
      <header className={`${isScrolled ? 'bg-white top-0 z-50 fixed shadow-black shadow-2xl' : 'top-0 z-50 fixed '} w-full md:w-10/12`}>
        <nav className="hidden md:hidden lg:block">
          <div className="text-xs font-bold flex justify-evenly items-center  w-full py-4">
            <div className="flex flex-row justify-around w-full">
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
            <div className="flex justify-around w-full">
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
                <DropdownMenuItem>
                  <Link href="/blog">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/script">Script Library</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className=""
                    href="/video_library"
                  >
                    Video Library
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>Services</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link
                    className=""
                    href="/our_approach"
                  >
                    Our Approach
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className=""
                    href="/service"
                  >
                    Core Technologies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className=""
                    href="/starter_packages"
                  >
                    Starter Packages
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    className=""
                    href="/contact"
                  >
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className=""
                    href="/contact"
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
    </div>
  );
}
