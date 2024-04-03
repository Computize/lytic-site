export const Map = () => {
  return (
    <div className="aspect-square w-[350px] md:w-[400px]">
      <img
        className="h-auto"
        style={{
          objectFit: 'contain',
        }}
        src={'/nyc.png'}
        alt={'map of nyc'}
      />
    </div>
  );
};
