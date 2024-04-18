import { BlogPreview } from '~/app/blog/page';
import { BlogCategories } from '~/app/components/blogPage/blogCategories';
import { BlogPreviewCard } from '~/app/components/blogPage/blogPreviewCard';

interface BlogPreviewCardContainerProps {
  blogItems: Array<BlogPreview>;
  columnDisplay?: boolean;
}

export const BlogPreviewCardContainer = ({ blogItems, columnDisplay }: BlogPreviewCardContainerProps) => {
  return (
    <div>
      <div className={columnDisplay ? 'flex flex-col gap-10' : 'grid grid-cols-2 gap-10 justify-center items-start'}>
        {blogItems.map((blogItem, idx) => {
          return (
            <BlogPreviewCard
              key={idx}
              blogPreview={blogItem}
            />
          );
        })}
        <BlogCategories />
      </div>
    </div>
  );
};
