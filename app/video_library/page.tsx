import { VideosContainer } from '~/app/components/videoLibrary/videosContainer';
import { VideoLibraryDescription } from '~/app/components/videoLibrary/videoLibraryDescription';
import { PageTitle } from '~app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { generateMetadata } from '~/app/constants/pageMetadata';

export const metadata = generateMetadata('Video Library');

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
