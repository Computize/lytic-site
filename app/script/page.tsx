import Link from 'next/link';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default async function Page() {
  return (
    <main>
      <PageUpperImageContainer>
        <div className="flex justify-center items-center h-full w-full bg-gradient-to-t from-primary-green via-primary-green to-white">
          <PageTitle title="SCRIPT LIBRARY" />
        </div>
      </PageUpperImageContainer>
      <div className="w-full h-[400px] px-12 gap-5 flex flex-col justify-center items-center md:shrink-0">
        <p className="text-2xl text-gray-600 text-center">The lion’s share of the database optimization and architecture we’ve provided to our clients has been in the Microsoft suite of data tiers. We’ve come up with a good number of automated solutions for our clients, particularly for SQL Server administration.</p>
        <p className="text-2xl text-gray-600 font-bold text-center">Here we share some of what we’ve kept in our toolbelts over time.</p>
        <div>PLACEHOLDER DROPDOWN FOR SCRIPTS</div>
      </div>

      <div className="w-full h-[300px] mb-6 bg-gray-400">
        <PageTitle title="NEED MORE HELP?" />
        <Link href="/contact">
          <button className="bg-primary-green w- p-2 px-12 text-white text-lg font-bold">CONTACT</button>
        </Link>
      </div>
    </main>
  );
}
