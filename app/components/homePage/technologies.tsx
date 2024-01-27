import Image from 'next/image';
import { TechListItems } from '~/app/components/homePage/TechListItems';

const techArray0: Array<string> = ['Data Warehouse & Data Lake', 'ETL & ELT', 'Azure Analysis Services', 'Azure DataFactory & DataBricks', 'Assessments, Monitoring'];
const techArray1: Array<string> = ['Dashboard Development', 'Cloud & On-Prem Integration', 'Data Strategy', 'Training'];
const techArray2: Array<string> = ['Migrations – Cloud & On-Prem', 'Governance & Compliance', 'Development & Automation Solutions', 'Sharepoint Site Planning & Architecture', 'Training'];

export const Technologies = () => {
  return (
    <div className="bg-background-green w-full h-[732px] flex justify-center items-center">
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-7">
            <div className="flex justify-center min-h-[180px]">
              <Image src="/azure.png" width={270} height={238} quality={80} alt="Azure Logo" />
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex justify-center min-h-[180px] ">
              <Image src="/microsoft_office.png" width={208} height={300} quality={80} alt="Microsoft Office Logo" />
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex justify-center min-h-[180px]">
              <Image src="/power_bi1_white.png" width={193} height={132} quality={80} alt="Power BI logo" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x-2 divide-gray-600">
          <div className="flex justify-center">
            <TechListItems arrayOfItems={techArray0} />
          </div>
          <div className="flex justify-center">
            <TechListItems arrayOfItems={techArray1} />
          </div>
          <div className="flex justify-center">
            <TechListItems arrayOfItems={techArray2} />
          </div>
        </div>
      </div>
    </div>
  );
};
