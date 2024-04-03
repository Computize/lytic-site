interface EmbeddedVideoProps {
  link: string;
  title: string;
  date: string;
}

export const EmbeddedVideo = ({ link, title, date }: EmbeddedVideoProps) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <iframe
        className="w-[250px] md:w-[400px] aspect-video"
        src={link}
        title={title}
        allow="accelerometer; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"
      />

      <div className="w-[250px] md:w-[400px] flex flex-col text-center text-gray-600 gap-3">
        <p className="text-sm">{date}</p>
        <p className="text-xl font-bold">{title}</p>
      </div>
    </div>
  );
};
