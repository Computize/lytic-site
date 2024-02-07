'use client';
import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';
import { TechnologyAndImage } from '~/app/components/service/technologyAndImage';

const techArray0: Array<string> = ['Data Warehouse & Data Lake', 'ETL & ELT', 'Azure Analysis Services', 'Azure DataFactory & DataBricks', 'Assessments, Monitoring'];
const techArray1: Array<string> = ['Dashboard Development', 'Cloud & On-Prem Integration', 'Data Strategy', 'Training'];
const techArray2: Array<string> = ['Migrations – Cloud & On-Prem', 'Governance & Compliance', 'Development & Automation Solutions', 'Sharepoint Site Planning & Architecture', 'Training'];

interface CoreTechnologiesProps {
  isOnHomePage: boolean;
}

export const CoreTechnologies = ({ isOnHomePage }: CoreTechnologiesProps) => {
  return (
    <div className="flex flex-row justify-evenly gap-16 px-36 w-full">
      <AnimateDiv initialProps={{ opacity: 0, translateX: -50 }}>
        <TechnologyAndImage
          arrayOfText={techArray0}
          imageSource="/azure.png"
        />
      </AnimateDiv>
      <AnimateDiv initialProps={{ opacity: 0, translateY: 50 }}>
        <TechnologyAndImage
          arrayOfText={techArray1}
          imageSource={isOnHomePage ? '/power_bi.png' : 'power_bi1_white.png'}
        />
      </AnimateDiv>
      <AnimateDiv initialProps={{ opacity: 0, translateX: 50 }}>
        <TechnologyAndImage
          arrayOfText={techArray2}
          imageSource="/microsoft_office.png"
        />
      </AnimateDiv>
    </div>
  );
};
