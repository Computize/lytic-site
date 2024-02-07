import { OurApproach } from '~/app/components/homePage/ourApproach';
import { OurPeople } from '~/app/components/homePage/ourPeople';
import { PresidentsBlogSection } from '~/app/components/homePage/presidentsBlog';

export const ApproachPeopleBlogContainer = () => {
  return (
    <div>
      <div className="flex flex-col h-[532px] relative">
        <OurApproach />
      </div>
      <div className="flex flex-col items-center relative bottom-12">
        <OurPeople />
        <PresidentsBlogSection />
      </div>
    </div>
  );
};
