import { LetsTalk } from '~/app/components/ourApproachPage/letsTalk';
import { PageBlurb } from '~/app/components/pageBlurb';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { generateMetadata } from '~/app/constants/pageMetadata';

const approachImageAndText = [
  {
    image: '/approach1.png',
    text: 'Cloud-based Data Warehouses & Data Lakes',
  },
  {
    image: '/approach2.png',
    text: 'Office365/Sharepoint migrations, planning, administration,governance, and development',
  },
  {
    image: '/approach3.png',
    text: 'ETL & Data Warehousing',
  },
  {
    image: '/approach4.png',
    text: 'Culture/Employee Migration, Training & Mentoring, Pilot Groups',
  },
  {
    image: '/approach5.png',
    text: 'Analytics & Business Intelligence Strategy',
  },
  {
    image: '/approach6.png',
    text: 'Azure - Synapse, Data Warehouse, Analysis Services, Data Factory',
  },
  {
    image: '/approach7.png',
    text: 'Database virtualization & high availability',
  },
  {
    image: '/approach8.png',
    text: 'Project Management',
  },
  {
    image: '/approach9.png',
    text: 'Business Intelligence Platforms (Tableau, Power B.I. Crystal Reports, Access, Reporting Services, Analysis Services, & Sharepoint)',
  },
  {
    image: '/approach10.png',
    text: 'Technical Documentation',
  },
];

export const metadata = generateMetadata('Our Approach');

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center">
      <PageUpperImageContainer
        imageSource="/our-approach-banner.png"
        className="h-[462px]"
      >
        <PageBlurb
          className="px-14 text-center max-w-5xl text-2xl sm:text-3xl"
          blurb="The Lytic Group is a team of consultants intent on thrilling its customers with unusual transparency and a comfortable, easy experience."
        />
      </PageUpperImageContainer>
      <div className="w-full flex flex-col items-center md:w-10/12 lg:w-8/12">
        <div className="flex flex-col justify-center items-center gap-10 p-10">
          <p className="text-primary-green text-5xl font-bold text-center">OUR APPROACH</p>
          <div className="flex flex-col gap-6 w-full sm:w-10/12 md:w-10/12">
            <p className="text-center text-gray-600 text-2xl font-bold">The anchor of our proven, unique approach to IT services is open, honest communication between a project's stakeholders our staff crafting a solution for them.</p>
            <p className="text-center text-gray-500 text-lg">We accomplish this by strictly hiring the warmest and most articulate technical experts in their field, and providing always-available transparency into all aspects of our projects. The result is a family of loyal, long-term customers. The team focuses on Microsoft backend architecture, business intelligence, and database administration and optimization, offering decades of combined experience in each. Using AGILE methodologies in our projects, our work insures flexibility as customer business needs and requirements change, and allows us to respond quickly to feedback.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 w-10/12  md:w-7/12">
          <p className="text-primary-green text-5xl font-bold text-center">OUR EXPERTISE</p>
          <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 gap-16">
            {approachImageAndText.map(({ image, text }, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-row gap-4 items-center"
                >
                  <img
                    alt="Stock Logo"
                    src={image}
                  />
                  <p className="text-gray-600 text-md font-bold">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-10/12 gap-8 my-10">
          <div className="border-t-[1px] border-gray-600 w-11/12" />
          <p className="text-gray-600 text-lg text-center w-11/12 mb-8">The Lytic Group is certified as a minority-owned (MWBE) business in NY State and New York City, and a Disadvantaged Business Enterprise (DBE) in New Jersey, Colorado, Illinois, Arizona, and Virginia.</p>
        </div>
      </div>
      <LetsTalk />
    </main>
  );
}
