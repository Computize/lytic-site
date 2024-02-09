import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';

export const OurApproach = () => {
  return (
    <div
      className="w-full flex justify-center items-center px-6"
      style={{
        backgroundImage: "url('/our-approach-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '600px',
        width: 'full',
      }}
    >
      <div className="flex flex-col justify-center items-center gap-7 z-10">
        <AnimateDiv initialProps={{ opacity: 0, translateY: 50 }}>
          <p className="text-primary-green text-center text-4xl md:text-5xl font-bold">OUR APPROACH</p>
        </AnimateDiv>
        <AnimateDiv
          initialProps={{ opacity: 0, translateY: 50 }}
          delay={0.5}
        >
          <p className="text-2xl w-full text-center">From unheard-of transparency to reliable communication, read on to find out how we create the best consulting experience your organization has ever had.</p>
        </AnimateDiv>
      </div>
    </div>
  );
};
