import { Banner } from '~/app/components/blogPage/banner';
import { BlogCategories } from '~/app/components/blogPage/blogCategories';
import { BlogPreviewCard } from '~/app/components/blogPage/blogPreviewCard';
import { GetOurNewsletter } from '~/app/components/blogPage/getOurNewsletter';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default async function Page() {
  return (
    <main className="flex flex-col w-full">
      <PageUpperImageContainer>
        <Banner />
      </PageUpperImageContainer>
      <div className="p-10 flex flex-row justify-center gap-5">
        <div className="grid grid-cols-2 gap-4">
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
