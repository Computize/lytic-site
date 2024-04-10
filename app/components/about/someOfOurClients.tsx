'use server';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '~/components/ui/carousel';

const arrayOfImageSources: {
  src: string;
  alt: string;
  width?: string;
}[] = [
  // TODO: Shrink NYPD to match fordham size as height limit
  {
    src: '/shake-shack-logo.png',
    alt: 'Shake Shack Logo',
  },
  {
    src: '/nypd-logo.png',
    alt: 'NYPD Logo',
    width: '120px',
  },
  {
    src: '/rabobank-logo.png',
    alt: 'Rabobank Logo',
  },
  {
    src: '/fordham-law-school-logo.png',
    alt: 'Fordham Law School logo',
  },
  {
    src: '/92-y-logo.png',
    alt: '92 Y Logo',
  },
  {
    src: '/ny-courts-logo.png',
    alt: 'NY Courts Logo',
  },
  {
    src: '/caremount-medical-logo.png',
    alt: 'Caremoung Medical Logo',
  },
  {
    src: '/sba-logo.png',
    alt: 'SBA Logo',
  },
];

export const SomeOfOurClients = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-6 justify-center items-center h-auto py-10 px-9">
      <p className="text-4xl text-center text-primary-green font-bold">SOME OF OUR CLIENTS</p>
      <div className="hidden md:flex flex-row overflow-x-scroll gap-5">
        {arrayOfImageSources.map(({ alt, src, width }, idx) => {
          return (
            <img
              className="h-[275px]"
              style={{
                objectFit: 'contain',
                width: width ?? '200px',
                height: 'auto',
              }}
              src={src}
              alt={alt}
              key={idx}
            />
          );
        })}
      </div>

      {/* MOBILE CAROUSEL */}
      <Carousel
        className="w-full md:hidden max-w-xs"
        autoPlay={false}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {arrayOfImageSources.map(({ alt, src, width }, idx) => {
            return (
              <CarouselItem key={idx}>
                <div className="flex items-center h-full justify-center">
                  <img
                    style={{
                      objectFit: 'contain',
                      width: width ?? '200px',
                      height: 'auto',
                    }}
                    src={src}
                    alt={alt}
                    key={idx}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-bottom-8 left-5 bg-primary-blue" />
        <CarouselNext className="-bottom-8 right-5 bg-primary-blue" />
      </Carousel>
    </div>
  );
};
