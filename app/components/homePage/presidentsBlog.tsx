import Link from 'next/link';

export const PresidentsBlogSection = () => {
  return (
    <div className="flex justify-center items-center h-[400px] w-full">
      <div className="flex flex-row gap-10 ">
        <div className="w-[200px]">
          <img
            src="/presidents-blog-animated.gif"
            style={{ width: 'full', height: 'full' }}
          />
        </div>
        <div className="flex flex-col gap-12 w-7/12">
          <p className="text-primary-green text-4xl font-bold">PRESIDENT&apos;S BLOG</p>
          <p className="text-xl w-auto">Thoughts on how to be a great consultant and an indispensable asset to a customer.</p>
          <div>
            <Link href={'/blog'}>
              <button className="bg-primary-green hover:bg-green-400 w-auto border-b-4 border-green-100 text-white font-bold py-2 px-4 rounded-full">
                <p className="text-black">READ THE BLOG</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
