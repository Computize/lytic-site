import Image from 'next/image';

export const Banner = () => {
  return (
    <div className="w-full h-full relative flex items-center">
      <Image src="/blog-page-banner.png" layout="fill" objectFit="cover" quality={80} alt="Blog Page Banner image" />
      <div className="absolute top-50 right-1/2 align-middle">
        <div className="flex items-center text-center">
          <p className="text-white text-5xl font-bold">PRESIDENT&apos;S BLOG</p>
        </div>
      </div>
    </div>
  );
};
