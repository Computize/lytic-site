import { BlogItem } from '~/app/blog/page';
import { Button } from '~/components/ui/button';

interface BlogPreviewCardProps {
  blogItem: BlogItem;
}

export const BlogPreviewCard = ({ blogItem }: BlogPreviewCardProps) => {
  const { date, previewText, title, author } = blogItem;
  return (
    <div className="min-w-[20px] max-w-[400px] border-[1px] flex flex-col items-start gap-4 p-4">
      <p className="text-3xl text-primary-green">{title}</p>
      <div>
        <p className="text-sm font-[500] text-gray-600">{author ?? 'Edward Heraux'}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
      <p className="text-xl line-clamp-6">{previewText}</p>
      <Button className="rounded-3xl bg-primary-green text-black">Read More</Button>
    </div>
  );
};
