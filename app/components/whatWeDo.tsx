import Image from 'next/image';
export const WhatWeDo = () => {
  return (
    <div className="flex flex-row justify-end h-[732px] border-2 py-36 border-green-500">
      <div className="animate-slide-right">
        <p className="text-3xl">WHAT WE DO</p>
        <p className="w-6/12">Specializing in Microsoft's analytics and data storage platform, high performance data warehouses and data lakes, and Microsoft's user-friendly ecosystem to surface it. We deliver on customized architecture that puts actionable data in your hands.</p>
      </div>
      <div>
        <Image src="/what-we-do-main-img.png" width={800} height={800} quality={100} alt="Lytic Group Logo" />
      </div>
    </div>
  );
};
