import { Map } from '~/app/components/homePage/map';
export const Headquarters = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center py-8  gap-12">
      <div className="flex flex-col gap-12">
        <div>
          <p className="text-primary-green text-3xl">Headquarters</p>
        </div>
        <div>
          <p>155 Water St. Brooklyn, NY 11201</p>
        </div>
        <div>
          <p>Email: info@lyticgroup.com</p>
          <p>http://www.lyticgroup.com</p>
          <p>Tel: (917) 804-0330</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Map />
      </div>
    </div>
  );
};
