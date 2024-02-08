'use client';
import { QuoteIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '~/components/ui/carousel';

interface Testimonial {
  testimonial: string;
  name: string;
  title: string;
  extraDetail?: string;
  clientSince: string;
}
const testimonialsArray: Array<Testimonial> = [
  {
    clientSince: 'Client since 2015',
    name: 'Chris Bynum',
    title: 'Director of Operations, 92nd Street Y',
    testimonial: '"Our database holds over 140 years of our organization’s history, so it was crucial to us that we find the right consultants for our redesign – and the team at Lytic Group did a wonderful job. They are incredibly easy to work with, down-to-earth, and their collaborative approach helped us find solutions that have made our database more effective and easy to use."',
  },
  {
    clientSince: '2007',
    name: 'Rendell Lofgreen',
    title: 'Accounting Systems Engineer & Payables Manager',
    extraDetail: 'Carollo Engineers, P.C.',
    testimonial: '"The Lytic Group has done a fantastic job by pinpointing our business needs in an efficient manner. Lead consultant Ed Heraux had the analytical skills to quickly gain the understanding needed for complicated calculations that were necessary to create and develop our solutions. Lytic had the foresight to recommend additional features, and were pleasant to work with in a team-like setting."',
  },
  {
    clientSince: '1997',
    name: 'Ken McGrory',
    title: 'President, Rabo Securities USA, Inc.',
    testimonial: '"I have had the opportunity to benefit from The Lytic Group’s work for 12 years. They’ve assisted me in improving the processing and recording of the company business for three different employers, including travelling to European locations. Lytic has always impressed me with their ability to assess a situation and come up with an efficient, secure and timely resolution to the issue. Ed Heraux is an IT expert with a keen ability to grasp various business issues, which is a rare talent."',
  },
  {
    clientSince: '2013',
    name: 'Anthony Amato',
    title: 'Health & Welfare Manager, Sergeants Benevolent Association',
    testimonial: '"The Lytic Group really took great care of us, and gave us exactly what we needed. They’re highly professional, easy to work with and communicative, in a way that you don’t see very often from consultants.”',
  },
  {
    clientSince: '2008',
    name: 'Trayce Turner',
    title: 'Chief Operating Officer, Optimal Solutions Group',
    testimonial: '"Optimal\'s experience with Lytic Group has been very positive. They have been flexible and professional in providing high quality database management services including server virtualization, security infrastructure, query development, and automated reports. The work is consistently timely and efficient."',
  },
  {
    clientSince: '2011',
    name: 'Trayce Turner',
    title: 'IT Project Manager, American Institute for Foreign Study',
    testimonial: '"I’m going to highly recommend you – your work is very good, your turnaround time is excellent, and your billing is honest. Thanks for that."',
  },
];

const renderTestimonials = testimonialsArray.map(({ clientSince, name, testimonial, title, extraDetail }) => {
  return (
    <CarouselItem>
      <div className="flex flex-row gap-6">
        <div>
          <QuoteIcon
            size={50}
            color="#91caee"
            className="transform scale-x-[-1]"
          />
        </div>
        <div className="flex flex-col max-w-md gap-6">
          <p>"Our database holds over 140 years of our organization’s history, so it was crucial to us that we find the right consultants for our redesign – and the team at Lytic Group did a wonderful job. They are incredibly easy to work with, down-to-earth, and their collaborative approach helped us find solutions that have made our database more effective and easy to use."</p>
          <div className="flex flex-col max-w-md">
            <p className="font-bold">Chris Bynum,</p>
            <p>Director of Operations, 92nd Street Y </p>
            <p>Client since </p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
});

export const Testimonials = () => {
  return (
    <div
      className="flex flex-col justify-center w-full h-[932px] bg-no-repeat bg-contain max-w-[500ppx]"
      style={{
        backgroundImage: "url('/testimonial-bg.jpg')",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-primary-blue text-5xl font-bold">TESTIMONIALS</p>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {/* NOTE: Not mapping due to unknown shadcn formatting issue */}
            <CarouselItem>
              <div className="flex flex-row gap-6">
                <div>
                  <QuoteIcon
                    size={50}
                    color="#91caee"
                    className="transform scale-x-[-1]"
                  />
                </div>
                <div className="flex flex-col max-w-md gap-6">
                  <p>{testimonialsArray[0].testimonial}</p>
                  <div className="flex flex-col max-w-md">
                    <p className="font-bold">{testimonialsArray[0].name}</p>
                    <p>{testimonialsArray[0].title}</p>
                    <p>{testimonialsArray[0].extraDetail}</p>
                    <p>Client since {testimonialsArray[0].clientSince}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <p className="text-xl w-6/12">{'{TESTIMONIALS CAROUSEL WILL GO HERE'}</p> */}
      </div>
    </div>
  );
};
