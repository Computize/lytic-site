// app/(subpages)/blog/[slug]/components/post-body.tsx
import markdownStyles from './markdown-styles.module.css';
import dayjs from 'dayjs';
import { BlogPreviewCardContainer } from '~/app/components/blogPage/blogPreviewCardContainer';
import { getPosts } from '~/lib/getPosts';

interface BlogPostProps {
  postContent: string;
  title: string;
  publishDate: string;
}

export async function BlogPost({ postContent, publishDate, title }: BlogPostProps) {
  const posts = await getPosts();
  const twoLatestPosts = posts.filter(({ title: postTitle }) => title !== postTitle).slice(0, 2);
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center">
      <div className="w-11/12 md:w-8/12 lg:w-6/12">
        <div>
          <p className="text-[16px] font-semibold">{title}</p>
          <p className="">{dayjs(publishDate).format('MMMM D, YYYY')}</p>
        </div>
        <article>
          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: postContent }}
          />
        </article>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-2xl text-left">RECENT POSTS:</p>
        <div className="gap-10 flex pb-10 flex-col justify-center items-center">
          <BlogPreviewCardContainer
            blogItems={twoLatestPosts}
            columnDisplay={true}
          />
        </div>
      </div>
    </div>
  );
}
