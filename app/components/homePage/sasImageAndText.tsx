interface SasImageAndTextProps {
  backgroundWhite?: boolean;
}
export function SasImageAndText({ backgroundWhite }: SasImageAndTextProps) {
  return (
    <div className={`${backgroundWhite ? 'bg-white' : 'bg-background-green'} w-full flex justify-center items-center h-auto py-10`}>
      <div className="flex flex-col items-center justify-center md:flex-row gap-6 w-9/12">
        <img
          src="/sas.png"
          alt="SAS logo"
          width="120px"
          height="auto"
        />
        <p className="flex items-center text-2xl text-gray-600">The Lytic Group is helping move SAS customers’ data warehouses and analytics tiers to the Microsoft Azure cloud.</p>
      </div>
    </div>
  );
}
