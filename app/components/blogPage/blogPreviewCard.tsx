import { BlogItem } from '~/app/blog/page';
import { Button } from '~/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card';

interface BlogPreviewCardProps {
  blogItem: BlogItem;
}

export const BlogPreviewCard = ({ blogItem }: BlogPreviewCardProps) => {
  const { date, previewText, title, author } = blogItem;
  return (
    <Card className="w-[350px]">
      <CardHeader>
        {/* TODO: reduce font weight for all blog titles */}
        <CardTitle className="text-primary-green">{title}</CardTitle>
        <CardDescription>{author ?? 'Edward Heraux'}</CardDescription>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{previewText}</p>
      </CardContent>
      <CardFooter>
        <Button className="rounded-3xl bg-primary-green text-black">Read More</Button>
      </CardFooter>
    </Card>
  );
};
