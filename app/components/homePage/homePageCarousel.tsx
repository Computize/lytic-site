import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';
import { Button } from '~/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '~/components/ui/carousel';

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

<button className="bg-primary-green hover:bg-green-400 w-auto border-b-4 border-green-100 text-white font-bold py-2 px-4 rounded-full">
  <p className="text-black">READ MORE</p>
</button>;
export const HomePageCarousel = () => {
  return (
    <div className="">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="">
          {arrayOfSlides.map(({ description, title, colorBlend }, index) => {
            return (
              <CarouselItem
                className={`min-w-full h-[562px] bg-blend-screen ${colorBlend}`}
                key={index}
                style={{
                  backgroundImage: "url('/home-page-banner.png')",
                }}
              >
                <div className="h-full w-full flex justify-between items-center">
                  <div className="h-full w-2/12" />
                  <div className="text-white flex flex-col justify-evenly">
                    <div className="h-9" />
                    <AnimateDiv
                      initialProps={{ opacity: '0', translateY: -50 }}
                      delay={0.75}
                    >
                      <p className="text-4xl font-bold">{title}</p>
                    </AnimateDiv>
                    <div className="h-9" />
                    <AnimateDiv
                      initialProps={{ opacity: '0', translateX: -100 }}
                      delay={0.75}
                    >
                      <p className="text-white text-2xl">{description}</p>
                    </AnimateDiv>
                    <div className="h-9" />
                    <AnimateDiv
                      initialProps={{ opacity: '0', translateY: 50 }}
                      delay={0.75}
                    >
                      <button className="bg-primary-green hover:bg-secondary-green w-auto border-b-4 border-green-100 text-white py-2 px-4 rounded-full">
                        <p className="text-black">READ MORE</p>
                      </button>
                    </AnimateDiv>
                  </div>
                  <div className="h-full w-2/12" />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
