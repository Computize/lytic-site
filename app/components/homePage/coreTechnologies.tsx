'use client';
import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';
import { TechnologyAndImage } from '~/app/components/service/technologyAndImage';
import { cn } from '~/lib/utils';

const techArray0: Array<string> = ['Data Warehouse & Data Lake', 'ETL & ELT', 'Azure Analysis Services', 'Azure DataFactory & DataBricks', 'Assessments, Monitoring'];
const techArray1: Array<string> = ['Dashboard Development', 'Data Modeling', 'Cloud & On-Prem Integration', 'Data Strategy', 'Training'];
const techArray2: Array<string> = ['Migrations – Cloud & On-Prem', 'Governance & Compliance', 'Development & Automation Solutions', 'Sharepoint Site Planning & Architecture', 'Training'];

interface CoreTechnologiesProps {
  isOnHomePage: boolean;
  className?: string;
}

export const CoreTechnologies = ({ isOnHomePage, className }: CoreTechnologiesProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className={cn(`flex flex-col md:flex-row justify-evenly gap-16 px-4 md:px-36 pt-12 w-full ${isOnHomePage ? 'bg-background-green' : 'bg-white'}`, className)}>
        <AnimateDiv initialProps={{ opacity: 0, translateX: -50 }}>
          <TechnologyAndImage
            arrayOfText={techArray0}
            imageSources={[{ src: '/azure.png' }]}
          />
        </AnimateDiv>
        <AnimateDiv initialProps={{ opacity: 0, translateY: 50 }}>
          <TechnologyAndImage
            arrayOfText={techArray1}
            // NOTE: temp redundant ternary while
            imageSources={
              isOnHomePage
                ? [
                    { src: '/Microsoft-Power-BI-Logo_PNG4.png', width: '150' },
                    { src: '/Fabric_final_x256.png', width: '150' },
                  ]
                : [
                    { src: '/Microsoft-Power-BI-Logo_PNG4.png', width: '150' },
                    { src: '/Fabric_final_x256.png', width: '150' },
                  ]
            }
          />
        </AnimateDiv>
        <AnimateDiv initialProps={{ opacity: 0, translateX: 50 }}>
          <TechnologyAndImage
            arrayOfText={techArray2}
            imageSources={[{ src: '/microsoft365.png', height: '200', width: '300' }]}
          />
        </AnimateDiv>
      </div>
    </div>
  );
};
