import Image from 'next/image';

export const Technologies = () => {
  return (
    <div className="bg-background-green w-full h-[732px]">
      <div className="px-4">
        <div className="grid grid-cols-3 justify-center mt-44 px-4">
          <div className="justify-self-center h-full">
            <Image src="/azure.png" width={270} height={238} quality={80} alt="Azure Logo" />
          </div>
          <div className="h-full justify-self-center">
            <Image src="/microsoft_office.png" width={208} height={300} quality={80} alt="Microsoft Office Logo" />
          </div>
          <div className="h-full justify-self-center">
            <Image src="/power_bi1_white.png" width={193} height={132} quality={80} alt="Power BI logo" />
          </div>
          <div className="grid grid-cols-3 justify-center px-4">
            <div className="h-full justify-self-center divide-x-2 divide-black">
              <ul>
                <li>Data Warehouse & Data Lake</li>
                <li>ETL & ELT</li>
                <li>Azure Analysis Services</li>
                <li>Azure DataFactory & DataBricks</li>
                <li>Assessments, Monitoring</li>
              </ul>
            </div>
            <div className="w-full h-full">
              <ul>
                <li></li>
              </ul>
            </div>
            <div className="w-full h-full">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
