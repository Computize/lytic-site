import { BlogPreview } from '~/app/blog/page';
import { BlogPreviewCard } from '~/app/components/blogPage/blogPreviewCard';

interface BlogPreviewCardContainerProps {
  blogItems: Array<BlogPreview>;
}

export const BlogPreviewCardContainer = ({ blogItems }: BlogPreviewCardContainerProps) => {
  return (
    <div className="grid grid-cols-2 gap-10 justify-center items-start">
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
