import Link from 'next/link';
import { PageTitle } from '~/app/components/pageTitle';

export const NeedMoreHelpContainer = () => {
  return (
    <div className="flex flex-col gap-8 bg-[url('/script-btm-section-bg.png')] bg-no-repeat bg-cover items-center min-h-[300px] justify-center">
      <PageTitle
        title="NEED MORE HELP?"
        className="text-center"
      />
      <Link href="/contact">
        <button className="bg-primary-green w- p-2 px-12 text-white text-lg font-bold">CONTACT</button>
      </Link>
    </div>
  );
};
