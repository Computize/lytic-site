'use server';

import { cn } from '~/lib/utils';

interface PageTitleProps {
  title: string;
  blurb?: boolean;
  className?: string;
}
export const PageTitle = ({ title, blurb, className }: PageTitleProps) => {
  return <p className={cn(`text-white font-bold text-center animate-slideInFromBottom ${blurb ? 'text-3xl' : 'text-[40px]'}`, className)}>{title.toUpperCase()}</p>;
};
