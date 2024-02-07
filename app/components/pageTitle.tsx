'use server';

interface PageTitleProps {
  title: string;
}
export const PageTitle = ({ title }: PageTitleProps) => {
  return <p className="text-white text-5xl font-bold animate-slideInFromBottom">{title.toUpperCase()}</p>;
};
