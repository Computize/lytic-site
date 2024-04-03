import Link from 'next/link';
import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';
import { PageTitle } from '~/app/components/pageTitle';
import { Button } from '~/components/ui/button';

export const ScriptLibrary = () => {
  return (
    <div
      // TODO: fix tailwind issue
      className="flex flex-col gap-10 bg-[url('/home-page-script-sec.png')] w-full px-6  h-[700px] md:px-60 bg-cover bg-center justify-center bg-no-repeat"
    >
      <AnimateDiv initialProps={{ opacity: 0, translateX: 75 }}>
        <PageTitle
          title="SCRIPT LIBRARY"
          className="text-right"
        />
      </AnimateDiv>

      <AnimateDiv initialProps={{ opacity: 0, translateX: -75 }}>
        <div className="flex flex-col gap-8">
          <div className="text-gray-600 text-xl md:text-3xl font-bold">SHARE OUR TOOLKIT</div>
          <div>
            <p className="text-lg">We’ve posted some SQL Server scripts that we’ve written, found particularly handy, and have used for our clients with great success. Every DBA should stop in and check them out.</p>
            <p className="text-m font-bold">Coming Soon: Sharepoint Office 365!</p>
          </div>
        </div>
      </AnimateDiv>
      <AnimateDiv initialProps={{ opacity: 0, translateX: 75 }}>
        <div className="text-right">
          <Link href="/script">
            <Button className="bg-primary-blue hover:bg-blue-400 h-14 w-auto border-b-4 border-blue-100 text-black font-bold py-4 px-4 rounded-full">SEE ALL SCRIPTS</Button>
          </Link>
        </div>
      </AnimateDiv>
    </div>
  );
};
