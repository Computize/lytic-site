'use client';
import { useRouter } from 'next/navigation';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '~/components/ui/select';
import scripts from '../../../public/scripts/scripts.json';

// Will error if JSON file is modified incorrectly
export const IMPORTED_SCRIPTS: Array<{ name: string; fileName: string; description: string }> = scripts;

export const ScriptDropDown = () => {
  const router = useRouter();
  return (
    <div>
      <Select
        onValueChange={(value) => {
          const slugName = value.replace(/ /g, '_');
          router.push(`/script/${slugName.toLowerCase()}`);
        }}
      >
        <SelectTrigger className="w-[350px] md:w-[500px] lg:w-[700px] h-[50px] bg-primary-green rounded-none text-white italic text-lg">
          <SelectValue placeholder="SELECT A SCRIPT"></SelectValue>
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup>
            {IMPORTED_SCRIPTS.map(({ name }, idx) => {
              return (
                <SelectItem
                  key={idx}
                  value={name}
                >
                  {name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
