const techArray0: Array<string> = ['Data Warehouse & Data Lake', 'ETL & ELT', 'Azure Analysis Services', 'Azure DataFactory & DataBricks', 'Assessments, Monitoring'];
const techArray1: Array<string> = ['Dashboard Development', 'Cloud & On-Prem Integration', 'Data Strategy', 'Training'];
const techArray2: Array<string> = ['Migrations – Cloud & On-Prem', 'Governance & Compliance', 'Development & Automation Solutions', 'Sharepoint Site Planning & Architecture', 'Training'];

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
          <div className="flex flex-col">
            <div className="flex justify-center items-center h-36">
              <img src="/azure.png" width={'200px'} />
            </div>
            {techArray0.map((item, idx) => {
              return <p key={idx}>{item}</p>;
            })}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center h-36">
              <img src="/power_bi.png" width={'200px'} />
            </div>
            {techArray1.map((item, idx) => {
              return <p key={idx}>{item}</p>;
            })}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center h-36">
              <img src="/microsoft_office.png" width={'200px'} />
            </div>
            {techArray2.map((item, idx) => {
              return <p key={idx}>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
