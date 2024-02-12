import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';

export const OurMission = () => {
  return (
    <div className="bg-gray-200 w-full flex justify-center">
      <div className="bg-gray-200 text-gray-600 h-auto w-10/12 md:w-6/12 flex flex-col justify-center gap-7 py-10 items-center">
        <AnimateDiv initialProps={{ opacity: 0, translateY: 50 }}>
          <p className="text-3xl md:text-5xl font-bold">OUR MISSION...</p>
        </AnimateDiv>
        <AnimateDiv
          initialProps={{ opacity: 0, translateY: 50 }}
          delay={0.5}
        >
          <div className="text-xl flex flex-col text-center gap-3">
            <p>...is to wow our customers with the best relationship they&apos;ve ever had with a solutions provider.</p>
            <p>We&apos;ll do this with robust yet flexible, lasting business intelligence solutions, close relationships, unparalleled transparency into our teams&apos; work, and consistent satisfaction to customers from a broad range of industries.</p>
          </div>
        </AnimateDiv>
      </div>
    </div>
  );
};
