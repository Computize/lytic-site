import { EmbeddedVideo } from '~/app/components/videoLibrary/embeddedVideo';
import videos from './videos.json';

export const VideosContainer = () => {
  return (
    <div className="flex flex-wrap gap-10 place-content-center mb-10">
      {videos.map((video, idx) => {
        return (
          <EmbeddedVideo
            link={video.link}
            title={video.title}
            date={video.date}
            key={idx}
          />
        );
      })}
    </div>
  );
};
