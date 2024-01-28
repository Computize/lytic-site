import { OurApproach } from '~/app/components/homePage/ourApproach';
import { OurPeople } from '~/app/components/homePage/ourPeople';
import { PresidentsBlog } from '~/app/components/homePage/presidentsBlog';

export const ApproachPeopleBlogContainer = () => {
  return (
    <div className="flex flex-col h-[832px] relative">
      <OurApproach />
      <div className="flex flex-col mt-10 absolute bottom-12">
        <OurPeople />
        <PresidentsBlog />
      </div>
    </div>
  );
};
