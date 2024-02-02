import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '~/components/ui/carousel';

export const HomePageCarousel = () => {
  return (
    <div className="">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              className="min-w-full h-[562px] pl-4"
              key={index}
              style={{
                backgroundImage: "url('/home-page-banner.png')",
              }}
            >
              <div className="h-full w-full flex justify-center items-center">
                <p className="text-white">With remarkable transparency and unusually direct access to the team working for you, you’ll wonder why no other consulting group has been able to deliver so well.</p>
              </div>
              <button>READ MORE</button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
