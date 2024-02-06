import Image from 'next/image';
import { TechListItems } from '~/app/components/homePage/TechListItems';
import { CoreTechnologies } from '~/app/components/homePage/coreTechnologies';

const techArray0: Array<string> = ['Data Warehouse & Data Lake', 'ETL & ELT', 'Azure Analysis Services', 'Azure DataFactory & DataBricks', 'Assessments, Monitoring'];
const techArray1: Array<string> = ['Dashboard Development', 'Cloud & On-Prem Integration', 'Data Strategy', 'Training'];
const techArray2: Array<string> = ['Migrations – Cloud & On-Prem', 'Governance & Compliance', 'Development & Automation Solutions', 'Sharepoint Site Planning & Architecture', 'Training'];

export const Technologies = () => {
  return (
    <div className="bg-background-green w-full h-[532px] flex justify-center items-center">
      <CoreTechnologies isOnHomePage={true} />
    </div>
  );
};
