import { Button } from '~/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '~/components/ui/carousel';

const arrayOfSlides: Array<{ title: string; description: string }> = [
  {
    title: 'ENGAGEMENT',
    description: "It's the soft skills that determine your comfort level and satisfaction with the consultants that you’ve hired.",
  },
  {
    title: 'TAKING CARE',
    description: 'More than you have likely seen, the Lytic Group treats our customers’ projects, employees, and most of all their time, with the utmost respect. This comes baked-in to how we work and how we communicate.',
  },
  {
    title: 'YOUR FAVORITE PROJECT',
    description: "It's the soft skills that determine your comfort level and satisfaction with the consultants that you’ve hired.",
  },
  {
    title: 'BUSINESS INTELLIGENCE',
    description: 'Re-focus your business to data-based decision-making. Let the Lytic Group turn your raw data into usable information.',
  },
];

export const HomePageCarousel = () => {
  return (
    <div className="">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="">
          {arrayOfSlides.map(({ description, title }, index) => {
            return (
              <CarouselItem
                className="min-w-full h-[562px]"
                key={index}
                style={{
                  backgroundImage: "url('/home-page-banner.png')",
                }}
              >
                <div className="h-full w-full flex justify-between items-center">
                  <div className="h-full w-2/12" />
                  <div className="text-white flex flex-col justify-evenly">
                    <div className="h-9" />
                    <p className="text-4xl font-bold">{title}</p>
                    <div className="h-9" />
                    <p className="text-white text-2xl">{description}</p>
                    <div className="h-9" />
                    <Button>READ MORE</Button>
                  </div>
                  <div className="h-full w-2/12" />
                </div>
              </CarouselItem>
            );
          })}
          {/* {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              className="min-w-full h-[562px]"
              key={index}
              style={{
                backgroundImage: "url('/home-page-banner.png')",
              }}
            >
              <div className="h-full w-full flex justify-between items-center">
                <div className="h-full w-2/12" />
                <div>
                  <p>YOUR FAVORITE PROJECT</p>
                  <p className="text-white text-2xl">
                    With remarkable transparency and unusually direct access <br /> to the team working for you, you’ll wonder why no <br /> other consulting group has been able to deliver so well.
                  </p>
                </div>
                <div className="h-full w-2/12" />
              </div>
              <button>READ MORE</button>
            </CarouselItem>
          ))} */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
