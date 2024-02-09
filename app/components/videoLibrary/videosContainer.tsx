import { EmbeddedVideo } from '~/app/components/videoLibrary/embeddedVideo';
import videos from './videos.json';

export const VideosContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center mx-16 mb-10">
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
