interface LyticDifferenceThreeColumnGridProps {
  arrayOfItems: Array<{ title: string; text: string }>;
}

export const LyticDifferenceThreeColumnGrid = ({ arrayOfItems }: LyticDifferenceThreeColumnGridProps) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-14 px-8 md:px-28">
      {arrayOfItems.map(({ text, title }, idx) => {
        return (
          <div
            className="flex flex-col text-center sm:text-left gap-4 text-gray-600"
            key={idx}
          >
            <p className="text-lg ">{title}</p>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};
