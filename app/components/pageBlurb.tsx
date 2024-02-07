'use server';
import { cn } from '~/lib/utils';

interface PageBlurbProps {
  blurb: string;
  className?: string;
}
export const PageBlurb = ({ blurb, className }: PageBlurbProps) => {
  return <p className={cn('text-white font-bold animate-slideInFromBottom text-3xl', className)}>{blurb}</p>;
};
