import Image from 'next/image';
export const WhatWeDo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-auto gap-7 py-20">
      <div className="flex flex-col gap-3 md:gap-10 px-6 md:ml-40">
        <p className="text-primary-green text-4xl md:text-6xl font-bold">WHAT WE DO</p>
        <p className="text-l md:text-xl w-10/12">Specializing in Microsoft&apos;s analytics and data storage platform, high performance data warehouses and data lakes, and Microsoft&apos;s user-friendly ecosystem to surface it. We deliver on customized architecture that puts actionable data in your hands.</p>
      </div>
      <div className="w-full flex justify-end">
        <img
          src="/what-we-do-main-img.png"
          alt="Lytic Group Logo"
          className="w-[300px] md:w-[2000px]"
        />
      </div>
    </div>
  );
};
