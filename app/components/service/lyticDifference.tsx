import { LyticDifferenceThreeColumnGrid } from '~/app/components/service/lyticDifferenceThreeColumnGrid';

const titleAndText: Array<{ title: string; text: string }> = [
  {
    title: 'TRANSPARENCY',
    text: 'Our customers enjoy 24-hour access to all the project-tracking data we keep and use ourselves to stay ahead of our timelines. This way, we truly make project decisions with our customers.',
  },
  {
    title: 'DIVERSITY',
    text: 'We wear our pride in our team members’ diversity into the market. The Lytic Group is a certified Minority Business Enterprise (MBE) in NY state & New York City, and a Disadvantaged Business Enterprise (DBE) in IL, NJ, CO, & AZ.',
  },
  {
    title: 'ELOQUENCE',
    text: 'All Lytic’s consultants are customer- facing. This demands that we vetour team members for their ability to communicate clearly to customers and inspire confidence throughout a project.',
  },
  {
    title: 'TALENT',
    text: 'The Lytic Group leverages only veteran experts for our customers. Their professionalism and knowledge level shines through every day, as our our consultants are customer-facing.',
  },
  {
    title: 'TECHNICAL COMMUNITY',
    text: 'Our subject matter experts are so passionate about what they’ve learned that they love to share it with those just starting out. See our Video Library for tech tips, training, and talks we’ve given.',
  },
  {
    title: 'TRUE PARTNERSHIPS',
    text: 'Through strategic subcontracting partnerships, we help our prime contractors thrive in the marketplace, leveraging our teams to extend theirs.',
  },
];

export const LyticDifference = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <p className="text-primary-green text-5xl font-bold">THE LYTIC DIFFERENCE</p>
      <LyticDifferenceThreeColumnGrid arrayOfItems={titleAndText.slice(0, 3)} />
      <div className="border-t-[1px] w-10/12" />
      <LyticDifferenceThreeColumnGrid arrayOfItems={titleAndText.slice(3, 6)} />
      <div className="border-t-[1px] w-10/12" />
    </div>
  );
};
