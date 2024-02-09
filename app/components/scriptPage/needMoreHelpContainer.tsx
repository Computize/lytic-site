import Link from 'next/link';
import { PageTitle } from '~/app/components/pageTitle';

export const NeedMoreHelpContainer = () => {
  return (
    <div className="w-full h-auto mb-6 bg-gray-400">
      <PageTitle title="NEED MORE HELP?" />
      <Link href="/contact">
        <button className="bg-primary-green w- p-2 px-12 text-white text-lg font-bold">CONTACT</button>
      </Link>
    </div>
  );
};
