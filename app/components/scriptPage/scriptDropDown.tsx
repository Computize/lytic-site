import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '~/components/ui/select';

export const ScriptDropDown = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full h-[50px] bg-primary-green rounded-none">
          <SelectValue
            className="placeholder:text-white"
            placeholder="Select a script"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
