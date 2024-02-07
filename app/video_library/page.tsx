import { VideosContainer } from '~/app/components/videoLibrary/videosContainer';
import { VideoLibraryDescription } from '~/app/components/videoLibrary/videoLibraryDescription';
import { PageTitle } from '~app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default async function Page() {
  return (
    <main>
      <PageUpperImageContainer>
        <PageTitle title="VIDEO LIBRARY" />
      </PageUpperImageContainer>
      <VideoLibraryDescription />
      <VideosContainer />
    </main>
  );
}
