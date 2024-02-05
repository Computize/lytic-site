interface TechnologyAndImageProps {
  imageSource: string;
  arrayOfText: Array<string>;
}

export const TechnologyAndImage = ({ imageSource, arrayOfText }: TechnologyAndImageProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center items-center h-36">
        <img src={imageSource} width={'200px'} />
      </div>
      <div className="flex flex-col gap-4">
        {arrayOfText.map((item, idx) => {
          return (
            <p className="text-2xl text-gray-600" key={idx}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
