export const OurPeople = () => {
  return (
    <div className="flex justify-center items-center h-[400px] w-8/12">
      <div className="flex flex-row gap-10">
        <img
          src="/our-people-animated.gif"
          style={{
            height: '180px',
          }}
        />
        <div className="flex flex-col gap-12">
          <p className="text-primary-blue text-4xl font-bold">OUR PEOPLE</p>
          <p className="text-xl w-auto">Our people and their people skills are the key to our success. Find out what it takes be on the Lytic Group team, and make our customers happy.</p>
          <div>
            <button className="bg-primary-blue hover:bg-blue-400 w-auto border-b-4 border-blue-200 text-white font-bold py-2 px-4 rounded-full">
              <p className="text-black">MEET OUR TEAM</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
