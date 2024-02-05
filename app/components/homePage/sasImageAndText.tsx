interface SasImageAndTextProps {
  backgroundWhite?: boolean;
}
export function SasImageAndText({ backgroundWhite }: SasImageAndTextProps) {
  return (
    <div className={`${backgroundWhite ? 'bg-white' : 'bg-background-green'} w-full flex justify-center items-center h-[200px]`}>
      <div className="flex flex-row justify-center gap-6 w-9/12">
        <img src="/sas.png" alt="image" width="120px" height="auto" />
        <p className="flex items-center text-2xl">The Lytic Group is helping move SAS customers’ data warehouses and analytics tiers to the Microsoft Azure cloud.</p>
      </div>
    </div>
  );
}
