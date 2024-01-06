import { OurApproach } from '~/app/components/homePage/ourApproach';
import { OurPeople } from '~/app/components/homePage/ourPeople';
import { PresidentsBlog } from '~/app/components/homePage/presidentsBlog';

export const ApproachPeopleBlogContainer = () => {
  return (
    <div className="flex flex-col h-[832px]">
      <OurApproach />
      <OurPeople />
      <PresidentsBlog />
    </div>
  );
};
