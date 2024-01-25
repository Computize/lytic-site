import Image from 'next/image';
export const WhatWeDo = () => {
  return (
    <div className="flex flex-row justify-end h-[732px] py-36">
      <div className="animate-slide-right">
        <p className="text-primary-green text-4xl font-bold">WHAT WE DO</p>
        <p className="text-xl w-6/12">Specializing in Microsoft&apos;s analytics and data storage platform, high performance data warehouses and data lakes, and Microsoft&apos;s user-friendly ecosystem to surface it. We deliver on customized architecture that puts actionable data in your hands.</p>
      </div>
      <div>
        <Image src="/what-we-do-main-img.png" width={1000} height={1000} quality={100} alt="Lytic Group Logo" />
      </div>
    </div>
  );
};
