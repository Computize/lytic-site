export const GetOurNewsletter = () => {
  return (
    <div className="py-5">
      <div className="min-w-full py-11 flex flex-col gap-5 items-center bg-background-light-gray">
        <p className="text-5xl font-bold text-primary-green">GET OUR NEWSLETTER</p>
        <div className="flex flex-row gap-4">
          <input className="w-[800px] h-11 placeholder:italic pl-3" placeholder="Enter your email address" />
          <button className="bg-primary-green">SIGN ME UP</button>
        </div>
      </div>
    </div>
  );
};
