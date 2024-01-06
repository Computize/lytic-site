import { VideosContainer } from '~/app/components/videoLibrary/videosContainer';
import { VideoLibraryDescription } from '~/app/components/videoLibrary/videoLibraryDescription';
import { PageTitle } from '~app/components/pageTitle';

export default async function Page() {
  return (
    <main>
      <div className="flex flex-col gap-8 py-16">
        <div className="min-w-full h-[350px]">
          <div className="flex justify-center items-center h-full bg-gradient-to-t from-primary-green via-primary-green to-white">
            <PageTitle title="VIDEO LIBRARY" />
          </div>
        </div>
        <VideoLibraryDescription />
        <VideosContainer />
      </div>
    </main>
  );
}
