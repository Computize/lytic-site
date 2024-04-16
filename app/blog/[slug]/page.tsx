import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { BlogPost } from '~/app/components/blogPage/blogPost';
import { generateMetadata } from '~/app/constants/pageMetadata';
import { getPosts } from '~/posts/getPosts';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '~/components/ui/alert';

export const metadata = generateMetadata('Blog');

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return (
      <main className="flex flex-col justify-center mt-52 w-full items-center overflow-x-hidden">
        <div className="w-10/12 md:w-4/12 flex justify-center items-center">
          <Alert variant="destructive">
            <AlertCircle />

            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Error occurred retrieving blog post</AlertDescription>
          </Alert>
        </div>
      </main>
    );
  }
  const { content, title, publishDate } = post;
  return (
    <main className="flex flex-col w-full items-center overflow-x-hidden">
      <PageUpperImageContainer imageSource="/blog-page-banner.png">
        <PageTitle
          title={title}
          className="text-center"
        />
      </PageUpperImageContainer>
      <div className="p-10 md:px-16 lg:px-28 pt-10">
        <BlogPost
          postContent={content}
          title={title}
          publishDate={publishDate}
        />
      </div>
    </main>
  );
}
