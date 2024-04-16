import { CoreTechnologies } from '~/app/components/homePage/coreTechnologies';
import { SasImageAndText } from '~/app/components/homePage/sasImageAndText';
import { LetsTalk } from '~/app/components/ourApproachPage/letsTalk';
import { PageBlurb } from '~/app/components/pageBlurb';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { IndustriesSection } from '~/app/components/service/industriesSection';
import { LyticDifference } from '~/app/components/service/lyticDifference';
import { generateMetadata } from '~/app/constants/pageMetadata';

export const metadata = generateMetadata('Service');

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-10">
      <PageUpperImageContainer
        imageSource="/service-page-banner.png"
        className="h-[362px]"
      >
        <PageBlurb
          className="drop-shadow-2xl px-2 max-w-5xl text-xl sm:text-3xl"
          blurb="Specializing in Microsoft's business intelligence platform, and in the high performance of the databases behind it. All to deliver a customized architecture that puts actionable data in your hands."
        />
      </PageUpperImageContainer>
      <div className="w-full flex flex-col items-center md:w-10/12 lg:w-11/12">
        <div className="flex flex-col items-center w-full">
          <p className="text-primary-green font-bold text-5xl py-10">CORE TECHNOLOGIES</p>
          <CoreTechnologies isOnHomePage={false} />
        </div>
        <div className="opacity-0 md:opacity-100 sm:block border-t-[1px] border-gray-600 w-10/12" />
        <div className="h-auto">
          <SasImageAndText backgroundWhite={true} />
        </div>
      </div>
      <IndustriesSection />
      <LyticDifference />
      <LetsTalk />
    </main>
  );
}
