import { BlogCategories } from '~/app/components/blogPage/blogCategories';
import { BlogPreviewCard } from '~/app/components/blogPage/blogPreviewCard';
import { GetOurNewsletter } from '~/app/components/blogPage/getOurNewsletter';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { generateMetadata } from '~/app/constants/pageHeading';

export const metadata = generateMetadata('Blog');

export default async function Page() {
  return (
    <main className="flex flex-col w-full">
      <PageUpperImageContainer imageSource="/blog-page-banner.png">
        <PageTitle
          title="PRESIDENT'S BLOG"
          className="text-center"
        />
      </PageUpperImageContainer>
      <div></div>
      <div className="p-10 flex flex-col md:flex-row justify-center gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
        </div>
        <BlogCategories />
      </div>
      <GetOurNewsletter />
    </main>
  );
}
