import { getPost } from '~/(posts)/getPosts';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { BlogPost } from '~/app/components/blogPage/blogPost';
import { generateMetadata } from '~/app/constants/pageMetadata';

export const metadata = generateMetadata('Blog');

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const post = await getPost(slug);
  const { content, title, publishDate } = post!;
  return (
    <main className="flex flex-col w-full items-center overflow-x-hidden">
      <PageUpperImageContainer imageSource="/blog-page-banner.png">
        <PageTitle
          title={title}
          className="text-center"
        />
      </PageUpperImageContainer>
      <div className="px-28 pt-10">
        <BlogPost
          postContent={content}
          title={title}
          publishDate={publishDate}
        />
      </div>
    </main>
  );
}
