import { CoreTechnologies } from '~/app/components/homePage/coreTechnologies';
import { SasImageAndText } from '~/app/components/homePage/sasImageAndText';
import { LetsTalk } from '~/app/components/ourApproachPage/letsTalk';
import { PageBlurb } from '~/app/components/pageBlurb';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { IndustriesSection } from '~/app/components/service/industriesSection';
import { LyticDifference } from '~/app/components/service/lyticDifference';

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-10">
      <PageUpperImageContainer imageSource="/service-page-banner.png">
        <PageBlurb
          className="px-72 text-4xl drop-shadow-lg"
          blurb="Specializing in Microsoft's business intelligence platform, and in the high performance of the databases behind it. All to deliver a customized architecture that puts actionable data in your hands."
        />
      </PageUpperImageContainer>

      <div className="flex flex-col items-center w-full">
        <p className="text-primary-green font-bold text-5xl py-10">CORE TECHNOLOGIES</p>

        <CoreTechnologies isOnHomePage={false} />
      </div>
      <div className="border-t-[1px] border-gray-600 w-10/12" />
      <div className="h-auto">
        <SasImageAndText backgroundWhite={true} />
      </div>
      <IndustriesSection />
      <LyticDifference />
      <LetsTalk />
    </main>
  );
}
