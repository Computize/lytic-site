import { BlogPreview } from '~/app/blog/page';
import dayjs from 'dayjs';
import { Button } from '~/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card';
import Link from 'next/link';

interface BlogPreviewCardProps {
  blogPreview: BlogPreview;
}

export const BlogPreviewCard = ({ blogPreview }: BlogPreviewCardProps) => {
  const { publishDate, title, previewText, slug } = blogPreview;

  return (
    <Card className="w-[350px]">
      <CardHeader>
        {/* TODO: reduce font weight for all blog titles */}
        <CardTitle className="text-primary-green font-normal">{title}</CardTitle>
        <CardDescription>{'Edward Heraux'}</CardDescription>
        <CardDescription>{dayjs(publishDate).format('MMMM D, YYYY')}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{previewText}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${slug}`}>
          <Button className="rounded-3xl hover:bg-background-green bg-primary-green text-black">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
