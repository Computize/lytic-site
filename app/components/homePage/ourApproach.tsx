import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';

export const OurApproach = () => {
  return (
    <div
      className="w-full h-[400px] flex justify-center items-center "
      style={{
        backgroundImage: "url('/our-approach-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '1000px',
        width: 'full',
      }}
    >
      <div className="flex flex-col justify-center items-center gap-7 z-10">
        <AnimateDiv initialProps={{ opacity: 0, translateY: 50 }}>
          <p className="text-primary-green text-center text-5xl font-bold">OUR APPROACH</p>
        </AnimateDiv>
        <AnimateDiv
          initialProps={{ opacity: 0, translateY: 50 }}
          delay={0.5}
        >
          <p className="text-2xl w-[700px] text-center">From unheard-of transparency to reliable communication, read on to find out how we create the best consulting experience your organization has ever had.</p>
        </AnimateDiv>
      </div>
    </div>
  );
};
