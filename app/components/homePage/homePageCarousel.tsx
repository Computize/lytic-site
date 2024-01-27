import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import Image from 'next/image';
export const HomePageCarousel = () => {
  /* TODO: replace with carousel */
  return (
    <PageUpperImageContainer>
      <img src="/home-page-banner.png" className="object-cover h-full w-full" />
    </PageUpperImageContainer>
  );
};
