import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';

export const ScriptLibrary = () => {
  return (
    <div
      className="flex flex-col gap-10 w-auto h-[900px] px-36 bg-home-page-script-sec justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/home-page-script-sec.png')",
      }}
    >
      <AnimateDiv initialProps={{ opacity: 0, translateX: 75 }}>
        <p className="text-white text-5xl font-bold text-right">SCRIPT LIBRARY</p>
      </AnimateDiv>

      <AnimateDiv initialProps={{ opacity: 0, translateX: -75 }}>
        <div className="text-gray-600 text-2xl font-bold">SHARE OUR TOOLKIT</div>
        <div>
          <p className="text-m">We’ve posted some SQL Server scripts that we’ve written, found particularly handy, and have used for our clients with great success. Every DBA should stop in and check them out.</p>
          <p className="text-m font-bold">Coming Soon: Sharepoint Office 365!</p>
        </div>
      </AnimateDiv>
      <AnimateDiv initialProps={{ opacity: 0, translateX: 75 }}>
        <div className="text-right">
          <button className="bg-primary-blue hover:bg-blue-400 w-auto border-b-4 border-blue-100 text-black font-bold py-4 px-4 rounded-full">SEE ALL SCRIPTS</button>
        </div>
      </AnimateDiv>
    </div>
  );
};
