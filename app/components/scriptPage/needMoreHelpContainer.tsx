import Link from 'next/link';
import { PageTitle } from '~/app/components/pageTitle';

interface NeedMoreHelpContainerProps {
  buttonCallToAction?: string;
  bannerTitle?: string;
}
export const NeedMoreHelpContainer = ({ bannerTitle, buttonCallToAction }: NeedMoreHelpContainerProps) => {
  return (
    <div className="flex flex-col gap-8 bg-[url('/script-btm-section-bg.png')] bg-no-repeat bg-cover items-center min-h-[300px] justify-center">
      <PageTitle
        title={bannerTitle ?? 'NEED MORE HELP?'}
        className="text-center"
      />
      <Link href="/contact">
        <button className="bg-primary-green w- p-2 px-12 text-white text-lg font-bold">{buttonCallToAction ?? 'CONTACT'}</button>
      </Link>
    </div>
  );
};
