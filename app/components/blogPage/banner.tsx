import Image from 'next/image';

export const Banner = () => {
  return (
    <div className="w-full h-full relative flex items-center">
      <Image src="/blog-page-banner.png" layout="fill" objectFit="cover" quality={80} alt="Blog Page Banner image" />
    </div>
  );
};
