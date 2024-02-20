import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '~/components/ui/dropdown-menu';

export const ServicesDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row items-center">
          SERVICES
          <ChevronDown size={20} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link
            className=""
            href="/our_approach"
          >
            OUR APPROACH
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            className=""
            href="/service"
          >
            CORE TECHNOLOGIES
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            className=""
            href="/starter_packages"
          >
            STARTER PACKAGES
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
