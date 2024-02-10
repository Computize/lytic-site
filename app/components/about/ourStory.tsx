import Image from 'next/image';
import { OwnerImageContainer } from '~/app/components/about/ownerImageContainer';
import { StoryDescription } from '~/app/components/about/storyDescription';

export const OurStory = () => {
  return (
    <div className="flex flex-col items-center w-9/12 py-16 gap-12">
      <p className="text-5xl text-primary-green font-bold">OUR STORY</p>
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row">
        <OwnerImageContainer />
        <StoryDescription />
      </div>
    </div>
  );
};
