import { BlogPreview } from '~/app/blog/page';
import { BlogPreviewCard } from '~/app/components/blogPage/blogPreviewCard';

interface BlogPreviewCardContainerProps {
  blogItems: Array<BlogPreview>;
}

export const BlogPreviewCardContainer = ({ blogItems }: BlogPreviewCardContainerProps) => {
  return (
    <div className="flex flex-wrap gap-10 items-center place-content-center justify-center">
      {blogItems.map((blogItem, idx) => {
        return (
          <BlogPreviewCard
            key={idx}
            blogPreview={blogItem}
          />
        );
      })}
    </div>
  );
};
