'use client';
import Link from 'next/link';
import React from 'react';
import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';
import { Button } from '~/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';

const arrayOfSlides: Array<{ title: string; description: string; colorBlend: string }> = [
  {
    title: 'BUSINESS INTELLIGENCE',
    description: 'Re-focus your business to data-based decision-making. Let the Lytic Group turn your raw data into usable information.',
    colorBlend: '',
  },
  {
    title: 'ENGAGEMENT',
    description: "It's the soft skills that determine your comfort level and satisfaction with the consultants that you’ve hired.",
    colorBlend: 'bg-yellow-900',
  },
  {
    title: 'TAKING CARE',
    description: 'More than you have likely seen, the Lytic Group treats our customers’ projects, employees, and most of all their time, with the utmost respect. This comes baked-in to how we work and how we communicate.',
    colorBlend: 'bg-blue-900',
  },
  {
    title: 'YOUR FAVORITE PROJECT',
    description: "It's the soft skills that determine your comfort level and satisfaction with the consultants that you’ve hired.",
    colorBlend: 'bg-green-900',
  },
];

export const HomePageCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(4);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full overflow-x-hidden relative">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        autoPlay={true}
        className="lg:w-full"
      >
        <CarouselContent className="">
          {arrayOfSlides.map(({ description, title, colorBlend }, index) => {
            return (
              <CarouselItem
                className={`h-[562px] bg-blend-screen ${colorBlend} bg-cover bg-bottom md:bg-top justify-center bg-no-repeat`}
                key={index}
                style={{
                  backgroundImage: "url('/home-page-banner.png')",
                }}
              >
                <div className="h-full w-full flex justify-between items-center">
                  <div className="h-full w-4/12" />
                  <div className="text-white flex flex-col justify-evenly">
                    <div className="h-9" />
                    <AnimateDiv
                      viewPortOnce={false}
                      initialProps={{ opacity: '0', translateY: -50 }}
                      delay={0.75}
                    >
                      <p className="text-4xl md:text-5xl font-bold">{title}</p>
                    </AnimateDiv>
                    <div className="h-9" />
                    <AnimateDiv
                      viewPortOnce={false}
                      initialProps={{ opacity: '0', translateX: -10 }}
                      delay={0.75}
                    >
                      <p className="text-white text-2xl">{description}</p>
                    </AnimateDiv>
                    <div className="h-9" />
                    <AnimateDiv
                      viewPortOnce={false}
                      initialProps={{ opacity: '0', translateY: 50 }}
                      delay={0.75}
                    >
                      <Button className="bg-primary-green hover:bg-secondary-green w-auto h-auto border-b-4 border-green-100 text-white py-3 px-8 rounded-full">
                        <Link
                          href="#what-we-do"
                          scroll={true}
                        >
                          <p className="text-black text-lg">READ MORE</p>
                        </Link>
                      </Button>
                    </AnimateDiv>
                  </div>
                  <div className="h-full w-4/12" />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="absolute inset-x-0 bottom-5 w-4 h-4 mx-auto my-auto flex justify-center gap-4">
          <div className="flex flex-row gap-4">
            {Array.from(Array(count).keys()).map((i) => (
              <button
                key={i}
                className={`h-4 w-4 rounded-full ${current === i ? 'bg-primary-green' : 'bg-orange-300'} hover:bg-primary-green`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};
