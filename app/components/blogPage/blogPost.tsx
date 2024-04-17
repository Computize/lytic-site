// app/(subpages)/blog/[slug]/components/post-body.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '~/mdx-components';
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
  const twoLatestPosts = posts.slice(0, 2);
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center">
      <div className="w-11/12 md:w-8/12 lg:w-6/12">
        <div>
          <p className="text-[16px] font-semibold">{title}</p>
          <p className="">{dayjs(publishDate).format('MMMM D, YYYY')}</p>
        </div>
        <div className="mdx">
          <MDXRemote
            source={postContent}
            components={useMDXComponents}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* RECENT POST CONTAINER */}
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
