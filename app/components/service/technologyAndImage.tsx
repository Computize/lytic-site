interface ImageSourceAndDimensions {
  src: string;
  width?: string;
  height?: string;
}

interface TechnologyAndImageProps {
  imageSources: Array<ImageSourceAndDimensions>;
  arrayOfText: Array<string>;
}

export const TechnologyAndImage = ({ imageSources, arrayOfText }: TechnologyAndImageProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className={`flex ${imageSources.length > 0 ? 'justify-evenly' : 'justify-center'}  items-center h-36`}>
        {imageSources.map(({ height, src, width }, idx) => {
          return (
            <img
              key={idx}
              alt="Tech Logo"
              src={src}
              width={width ?? '200px'}
              height={height ?? '150px'}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        {arrayOfText.map((item, idx) => {
          return (
            <p
              className="text-2xl text-gray-600"
              key={idx}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="block md:invisible border-t-[1px] border-gray-600" />
    </div>
  );
};
