'use server';

interface PageTitleProps {
  title: string;
  blurb?: boolean;
}
export const PageTitle = ({ title, blurb }: PageTitleProps) => {
  return <p className={`text-white font-bold animate-slideInFromBottom ${blurb ? 'text-3xl' : 'text-5xl'}`}>{title.toUpperCase()}</p>;
};
