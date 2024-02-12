import { BlogItem } from '~/app/blog/page';
import { BlogPreviewCard } from '~/app/components/blogPage/blogPreviewCard';

interface BlogPreviewCardContainerProps {
  blogItems: Array<BlogItem>;
}

export const BlogPreviewCardContainer = ({ blogItems }: BlogPreviewCardContainerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {blogItems.map((blogItem, idx) => {
        return (
          <BlogPreviewCard
            key={idx}
            blogItem={blogItem}
          />
        );
      })}
    </div>
  );
};
