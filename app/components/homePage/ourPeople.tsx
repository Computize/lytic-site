import Link from 'next/link';

export const OurPeople = () => {
  return (
    <div className="flex justify-center items-center h-[400px] w-full">
      <div className="flex flex-row gap-10 ">
        <div className="w-[200px]">
          <img src="/our-people-animated.gif" style={{ width: 'full', height: 'full' }} />
        </div>
        <div className="flex flex-col gap-12 w-7/12">
          <p className="text-primary-blue text-4xl font-bold">OUR PEOPLE</p>
          <p className="text-xl w-auto">Our people and their people skills are the key to our success. Find out what it takes be on the Lytic Group team, and make our customers happy.</p>
          <div>
            <Link href={'/about'}>
              <button className="bg-primary-blue hover:bg-blue-400 w-auto border-b-4 border-blue-100 text-white font-bold py-2 px-4 rounded-full">
                <p className="text-black">MEET OUR TEAM</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
