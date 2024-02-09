'use server';

import { cn } from '~/lib/utils';

interface PageTitleProps {
  title: string;
  blurb?: boolean;
  className?: string;
}
export const PageTitle = ({ title, blurb, className }: PageTitleProps) => {
  return <p className={cn(`text-white font-bold animate-slideInFromBottom ${blurb ? 'text-3xl' : 'text-5xl'}`, className)}>{title.toUpperCase()}</p>;
};
