'use client';
import { AnimateDiv } from '~/app/components/animationWrappers/animateDiv';
import { TechnologyAndImage } from '~/app/components/service/technologyAndImage';
import { cn } from '~/lib/utils';

const techArray0: Array<string> = ['Data Warehouses & Data Lakes', 'Data Quality for AI', 'Streaming Data', 'Azure DataFactory & DataBricks', 'ETL & ELT'];
const techArray1: Array<string> = ['Administration and Governance', 'Dashboard Development', 'Data Modeling',  'Data Strategy', 'Training'];
const techArray2: Array<string> = [' Sharepoint & Teams Migrations', 'Governance, Compliance, Purview', 'Development & Automation Solutions', 'Sharepoint Site Planning & Architecture', 'Training'];

interface CoreTechnologiesProps {
  isOnHomePage: boolean;
  className?: string;
}
// Originally went right below the two <div className="..."> elements and before the third <AnimateDiv> element
/*      <AnimateDiv initialProps={{ opacity: 0, translateX: -50 }}>
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
                    { src: '/Microsoft-Power-BI-Logo_PNG4.png', width: '100' },
                    //{ src: '/Fabric_final_x256.png', width: '100' },
                  ]
                : [
                    { src: '/Microsoft-Power-BI-Logo_PNG4.png', width: '100' },
                    //{ src: '/Fabric_final_x256.png', width: '100' },
                  ]
            }
          />
        </AnimateDiv> 
*/

export const CoreTechnologies = ({ isOnHomePage, className }: CoreTechnologiesProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className={cn(`flex flex-col md:flex-row justify-evenly gap-16 px-4 md:px-36 pt-12 w-full ${isOnHomePage ? 'bg-background-green' : 'bg-white'}`, className)}>
        <AnimateDiv initialProps={{ opacity: 0, translateX: -50 }}>
          <TechnologyAndImage
            arrayOfText={techArray0}
            //imageSources={[{ src: '/azure.png' }]}
            imageSources={
              isOnHomePage
                ? [
                    { src: '/Fabric_final_x256.png', width: '100' },
                    { src: '/azure.png' }
                  ]
                /* : [
                    { src: '/Microsoft-Power-BI-Logo_PNG4.png', width: '100' },
                    { src: '/Fabric_final_x256.png', width: '100' }] */
               :[
                    { src: '/Fabric_final_x256.png', width: '100' },
                    { src: '/azure.png' }
                  ]   
            }            
            
          />
        </AnimateDiv>
        <AnimateDiv initialProps={{ opacity: 0, translateY: 50 }}>
          <TechnologyAndImage
            arrayOfText={techArray1}
            // NOTE: temp redundant ternary while
            imageSources={
              isOnHomePage
                ? [
                    { src: '/Microsoft-Power-BI-Logo_PNG4.png', width: '100' },
                    //{ src: '/Fabric_final_x256.png', width: '100' },
                  ]
                : [
                    { src: '/Microsoft-Power-BI-Logo_PNG4.png', width: '100' },
                    //{ src: '/Fabric_final_x256.png', width: '100' },
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
