import { SasImageAndText } from '~/app/components/homePage/sasImageAndText';

const techArray0: Array<string> = ['Data Warehouse & Data Lake', 'ETL & ELT', 'Azure Analysis Services', 'Azure DataFactory & DataBricks', 'Assessments, Monitoring'];
const techArray1: Array<string> = ['Dashboard Development', 'Cloud & On-Prem Integration', 'Data Strategy', 'Training'];
const techArray2: Array<string> = ['Migrations – Cloud & On-Prem', 'Governance & Compliance', 'Development & Automation Solutions', 'Sharepoint Site Planning & Architecture', 'Training'];

interface TechnologyAndImageProps {
  imageSource: string;
  arrayOfText: Array<string>;
}
const TechnologyAndImage = ({ imageSource, arrayOfText }: TechnologyAndImageProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center items-center h-36 border-2">
        <img src={imageSource} width={'200px'} />
      </div>
      <div className="flex flex-col gap-4">
        {arrayOfText.map((item, idx) => {
          return (
            <p className="text-2xl text-gray-600" key={idx}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <main className="flex flex-col items-center gap-10">
      <div
        className="h-[532px] w-full object-cover"
        style={{
          backgroundImage: "url('/service-page-banner.png')",
        }}
      >
        <div className="w-full h-full flex justify-center items-center p-44">
          <p className="text-white text-3xl font-bold drop-shadow-md">Specializing in Microsoft's business intelligence platform, and in the high performance of the databases behind it. All to deliver a customized architecture that puts actionable data in your hands.</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="text-primary-green font-bold text-5xl py-10">CORE TECHNOLOGIES</p>

        <div className="flex flex-row justify-evenly gap-16 px-36 w-full">
          <TechnologyAndImage arrayOfText={techArray0} imageSource="/azure.png" />
          <TechnologyAndImage arrayOfText={techArray1} imageSource="/power_bi.png" />
          <TechnologyAndImage arrayOfText={techArray2} imageSource="/microsoft_office.png" />
        </div>
      </div>
      <div className="border-t-[1px] border-gray-600 w-10/12" />
      <div className="h-[432px]">
        <SasImageAndText backgroundWhite={true} />
      </div>
    </main>
  );
}
