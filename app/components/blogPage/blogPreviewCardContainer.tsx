import { BlogPreview } from '~/app/blog/page';
import { BlogCategories } from '~/app/components/blogPage/blogCategories';
import { BlogPreviewCard } from '~/app/components/blogPage/blogPreviewCard';

interface BlogPreviewCardContainerProps {
  blogItems: Array<BlogPreview>;
  columnDisplay?: boolean;
}

export const BlogPreviewCardContainer = ({ blogItems, columnDisplay }: BlogPreviewCardContainerProps) => {
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  return (
    <div>
      <div className={columnDisplay ? 'w-full flex flex-col gap-10' : 'grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-start w-full'}>
        {blogItems.map((blogItem, idx) => {
          return (
            <BlogPreviewCard
              key={idx}
              blogPreview={blogItem}
            />
          );
        })}
      </div>
    </div>
  );
};
