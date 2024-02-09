import { Button } from '~/components/ui/button';

export const GetOurNewsletter = () => {
  return (
    <div className="py-5">
      <div className="py-11 flex flex-col gap-5 items-center bg-background-light-gray">
        <p className="text-5xl font-bold text-center text-primary-green">GET OUR NEWSLETTER</p>
        <div className="flex flex-col justify-center md:flex-row gap-4">
          <input
            className="w-[300px] md:w-[500px] h-11 placeholder:italic pl-3 "
            placeholder="Enter your email address"
          />
          <Button className="bg-primary-green text rounded-none">SIGN ME UP</Button>
        </div>
      </div>
    </div>
  );
};
