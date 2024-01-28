import { OurApproach } from '~/app/components/homePage/ourApproach';
import { OurPeople } from '~/app/components/homePage/ourPeople';
import { PresidentsBlog } from '~/app/components/homePage/presidentsBlog';

export const ApproachPeopleBlogContainer = () => {
  return (
    <div>
      <div className="flex flex-col h-[532px] relative">
        <OurApproach />
      </div>
      <div className="flex flex-col relative bottom-12">
        <OurPeople />
        <PresidentsBlog />
      </div>
    </div>
  );
};
