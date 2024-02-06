import { CheckIcon } from 'lucide-react';

interface AccordionList {
  title: string;
  listItems: Array<string>;
}

export const AccordionList = ({ listItems, title }: AccordionList) => {
  return (
    <div className="flex flex-col w- max-w-[200px]">
      {title.length > 0 && (
        <div className="flex flex-row items-center gap-1">
          <CheckIcon
            size={15}
            strokeWidth={5}
            color="#9bbc5a"
          />
          <p className="text-gray-600 font-bold">{title}</p>
        </div>
      )}
      <div className="pl-5 text-gray-600">
        <ul>
          {listItems.map((item, idx) => {
            return (
              <li
                className="py-1"
                key={idx}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
