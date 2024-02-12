const subFolder = '/industries';
const industriesImagesAndTitles: Array<{ image: string; title: string }> = [
  {
    image: '/industries_finance.png',
    title: 'FINANCE',
  },
  {
    image: '/industries_healthcare.png',
    title: 'HEALTHCARE',
  },
  {
    image: '/industries_government.png',
    title: 'GOVERNMENT',
  },
  {
    image: '/industries_pharma.png',
    title: 'PHARMACEUTICALS',
  },
  {
    image: '/industries_smbs.png',
    title: "SMB'S",
  },
];

export const IndustriesSection = () => {
  return (
    <div className="text-white flex flex-col w-full h-auto py-20 bg-primary-green justify-center gap-8 items-center">
      <p className="text-5xl font-bold">INDUSTRIES</p>
      <div className="flex flex-wrap gap-8 w-full h-auto justify-center items-center">
        {industriesImagesAndTitles.map(({ image, title }, idx) => {
          return (
            <div
              key={idx}
              className="flex w-60 my-4 gap-8 flex-col justify-center items-center"
            >
              <img
                src={`${subFolder}${image}`}
                alt="Industry Logo"
                style={{
                  width: 'auto',
                  height: '100px',
                }}
              />
              <p className="text-2xl">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
