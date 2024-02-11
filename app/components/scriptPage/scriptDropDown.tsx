'use client';
import { useRouter } from 'next/navigation';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '~/components/ui/select';

export const arrayOfScripts = [{ name: 'Store Activity Monitor Data' }, { name: 'Update Statistics By Age' }, { name: 'Auto Rebuild Indexes' }, { name: 'Job Summary' }, { name: 'DDL Log' }, { name: 'All Object Permissions' }, { name: 'DB Size History' }];

export const ScriptDropDown = () => {
  const router = useRouter();
  return (
    <div>
      <Select
        onValueChange={(value) => {
          router.push(`/script/${value}`);
        }}
      >
        <SelectTrigger className="w-[350px] md:w-[500px] lg:w-[700px] h-[50px] bg-primary-green rounded-none text-white italic text-lg">
          <SelectValue placeholder="SELECT A SCRIPT"></SelectValue>
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup>
            {arrayOfScripts.map(({ name }, idx) => {
              return (
                <SelectItem
                  key={idx}
                  value={idx.toString()}
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
