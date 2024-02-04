export const LetsTalk = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full bg-primary-green h-52 mb-10">
      <p className="text-5xl font-bold text-white">GET OUR NEWSLETTER</p>
      <div className="flex flex-row gap-4">
        <input className="w-[800px] h-11 placeholder:italic" placeholder="Enter your email address" />
        <button className="bg-secondary-green px-9 text-white font-bold">CONTACT ME</button>
      </div>
    </div>
  );
};
