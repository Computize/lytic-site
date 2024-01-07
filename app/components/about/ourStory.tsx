import { StoryDescription } from '~/app/components/about/storyDescription';

export const OurStory = () => {
  return (
    <div className="flex flex-col items-center p-9">
      <p className="text-5xl text-primary-green font-bold">OUR STORY</p>
      <StoryDescription />
    </div>
  );
};
