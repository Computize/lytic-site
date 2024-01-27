interface TechListItemsProps {
  arrayOfItems: Array<string>;
}

export function TechListItems({ arrayOfItems }: TechListItemsProps) {
  const mappedItems = arrayOfItems.map((element, idx) => {
    return (
      <li className="text-xl w-5/6" key={idx}>
        {element}
      </li>
    );
  });
  return <ul className="space-y-3">{mappedItems}</ul>;
}
