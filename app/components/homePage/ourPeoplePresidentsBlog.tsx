import Link from 'next/link';
import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';
import { Button } from '~/components/ui/button';

export const OurPeoplePresidentsBlog = () => {
  return (
    <div className="flex flex-col items-center w-10/12 h-auto gap-24 sm:gap-12 pb-8">
      <div className="min-h-[300px] flex flex-col gap-4 sm:gap-0 sm:flex-row justify-center sm:justify-start sm:items-center">
        <div className="flex justify-center">
          <img
            src="/our-people-animated.gif"
            alt="animated gif of person with glasses"
            className="w-[150px]"
          />
        </div>
        <div className="w-8" />
        <AnimateDiv initialProps={{ opacity: 0, translateX: 120 }}>
          <div className="flex flex-col gap-10 w-full sm:max-w-[500px]">
            <p className="text-primary-blue text-5xl font-bold">OUR PEOPLE</p>
            <p className="text-2xl w-auto">Our people and their people skills are the key to our success. Find out what it takes be on the Lytic Group team, and make our customers happy.</p>
            <div className="flex">
              <Button className="bg-primary-blue text-lg hover:bg-blue-400 w-auto border-b-4 border-blue-100 text-white font-bold py-7 px-8 rounded-full">
                <Link href="/about">MEET OUR TEAM</Link>
              </Button>
            </div>
          </div>
        </AnimateDiv>
      </div>
      <div className="min-h-[300px] flex flex-col gap-4 sm:gap-0 sm:flex-row justify-center sm:justify-start sm:items-center">
        <div className="flex justify-center">
          <img
            src="/presidents-blog-animated.gif"
            alt="animated gif of typewriter"
            className="w-[175px]"
          />
        </div>
        <div className="w-8" />
        <AnimateDiv initialProps={{ opacity: 0, translateX: 120 }}>
          <div className="flex flex-col gap-10 w-full sm:max-w-[500px]">
            <p className="text-primary-green text-5xl font-bold">PRESIDENT&apos;S BLOG</p>
            <p className="text-2xl w-auto">Thoughts on how to be a great consultant and an indispensable asset to a customer.</p>
            <div className="flex">
              <Button className="text-lg bg-primary-green hover:bg-secondary-green w-auto border-b-4 border-green-100 font-bold text-white py-7 px-8 rounded-full">
                <Link href="/blog">READ THE BLOG</Link>
              </Button>
            </div>
          </div>
        </AnimateDiv>
      </div>
    </div>
  );
};
