'use server';
import Image from 'next/image';

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
    <div className="flex flex-col gap-6 justify-center h-auto py-10 px-9">
      <p className="text-4xl text-center text-primary-green font-bold">SOME OF OUR CLIENTS</p>
      <div className="grid grid-cols-6">
        {arrayOfImageSources.map(({ alt, src }, idx) => {
          return <Image height={300} width={300} src={src} alt={alt} key={idx} />;
        })}
      </div>
    </div>
  );
};
