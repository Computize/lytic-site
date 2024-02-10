import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

// TODO: Use this component and make the text props, this is basically a duplicate
export const LetsTalk = ({ heading, bgColor, className }: { heading?: string; bgColor?: string; className?: string }) => {
  return (
    <div className={cn(`flex flex-col items-center justify-center gap-5 w-full ${bgColor ?? 'bg-primary-green'} h-52 mb-10`, className)}>
      <p className="text-center text-5xl font-bold text-white">{heading ?? "LET'S TALK"}</p>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="w-[300px] md:w-[500px] h-11 placeholder:italic pl-3"
          placeholder="Enter your email address"
        />
        <Button className={`bg-secondary-green px-9 text-white font-bold rounded-none`}>CONTACT ME</Button>
      </div>
    </div>
  );
};
