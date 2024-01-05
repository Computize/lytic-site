import { OurApproach } from '~/app/components/homePage/ourApproach';
import { OurPeople } from '~/app/components/homePage/ourPeople';

export const OurApproachOurPeopleContainer = () => {
  return (
    <div className="flex flex-col h-[832px]">
      <OurApproach />
      <OurPeople />
    </div>
  );
};
