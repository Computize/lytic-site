'use server';
import Image from 'next/image';
import { Card, CardContent } from '~/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '~/components/ui/carousel';

const arrayOfImageSources = [
  {
    src: '/rabobank-logo.png',
    alt: 'Rabobank Logo',
  },
  {
    src: '/ny-courts-logo.png',
    alt: 'NY Courts Logo',
  },
  {
    src: '/fordham-law-school-logo.png',
    alt: 'Fordham Law School logo',
  },
  {
    src: '/caremount-medical-logo.png',
    alt: 'Caremoung Medical Logo',
  },
  {
    src: '/92-y-logo.png',
    alt: '92 Y Logo',
  },
  {
    src: '/sba-logo.png',
    alt: 'SBA Logo',
  },
];

export const SomeOfOurClients = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-auto py-10 px-9">
      <p className="text-4xl text-center text-primary-green font-bold">SOME OF OUR CLIENTS</p>
      <div className="hidden md:grid grid-cols-6 ">
        {arrayOfImageSources.map(({ alt, src }, idx) => {
          return (
            <Image
              height={300}
              width={300}
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
          {arrayOfImageSources.map(({ alt, src }, idx) => {
            return (
              <CarouselItem key={idx}>
                <div className="flex justify-center">
                  <Image
                    height={300}
                    width={300}
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
