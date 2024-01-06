import { Map } from '~/app/components/homePage/map';
export const Headquarters = () => {
  return (
    <div className="w-full h-[532px] flex flex-row justify-center gap-10">
      <div className="flex flex-col gap-12">
        <div>
          <p className="text-primary-green text-3xl">Headquarters</p>
        </div>
        <div>
          <p>155 Water St. Brooklyn, NY 11201</p>
        </div>
        <div>
          <p>Tel: (917) 804-0330</p>
          <p>Email: info@lyticgroup.com</p>
          <p>http://www.lyticgroup.com</p>
        </div>
      </div>
      <Map />
    </div>
  );
};
