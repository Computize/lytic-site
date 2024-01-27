import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import Image from 'next/image';
export const HomePageCarousel = () => {
  /* TODO: replace with carousel */
  return (
    <PageUpperImageContainer>
      <div>
        <img src="/home-page-banner.png" className="object-cover h-[538px] w-full" />

        {/* <Image layout="fill" quality={80} alt="Home Page Banner image" /> */}
      </div>
    </PageUpperImageContainer>
  );
};
