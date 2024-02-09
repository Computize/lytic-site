import { ScriptDropDown } from '~/app/components/scriptPage/scriptDropDown';

export const ScriptDescriptionAndDropDownContainer = () => {
  return (
    <div className="w-full h-auto px-12 py-10 gap-5 flex flex-col justify-center items-center md:shrink-0">
      <p className="text-2xl text-gray-600 text-center">The lion’s share of the database optimization and architecture we’ve provided to our clients has been in the Microsoft suite of data tiers. We’ve come up with a good number of automated solutions for our clients, particularly for SQL Server administration.</p>
      <p className="text-2xl text-gray-600 font-bold text-center">Here we share some of what we’ve kept in our toolbelts over time.</p>
      <ScriptDropDown />
    </div>
  );
};
