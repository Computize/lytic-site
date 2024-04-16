// app/(subpages)/blog/[slug]/components/post-body.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '~/mdx-components';
import dayjs from 'dayjs';
import { getPosts } from '~/(posts)/getPosts';
import { BlogPreviewCardContainer } from '~/app/components/blogPage/blogPreviewCardContainer';

interface BlogPostProps {
  postContent: string;
  title: string;
  publishDate: string;
}

export async function BlogPost({ postContent, publishDate, title }: BlogPostProps) {
  const posts = await getPosts();
  const twoLatestPosts = posts.slice(0, 2);
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div>
        <div>
          <p className="text-[16px] font-semibold">{title}</p>
          <p className="">{dayjs(publishDate).format('MMMM D, YYYY')}</p>
        </div>
        <div className="mdx">
          <MDXRemote
            source={postContent}
            options={{}}
            //   mdxOptions: {
            //     remarkPlugins: [
            //       // Adds support for GitHub Flavored Markdown
            //       remarkGfm,
            //     ],
            //     // These work together to add IDs and linkify headings
            //     rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
            //   },
            // }}
            components={useMDXComponents}
          />
        </div>
      </div>
      <div>
        {/* RECENT POST CONTAINER */}
        <div className="gap-10 flex pb-10 flex-col justify-center items-center">
          <p className="font-semibold text-2xl text-left">RECENT POSTS</p>
          <BlogPreviewCardContainer blogItems={twoLatestPosts} />
        </div>
      </div>
    </div>
  );
}
