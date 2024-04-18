'use-client';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { BlogPostCategory } from '~/lib/getPosts';

export function BlogCategories() {
  return (
    <div className="flex flex-col w-3/12 gap-2">
      <p className="text-xl font-bold">CATEGORIES:</p>
      {Object.values(BlogPostCategory).map((category, idx) => {
        return (
          <Button key={idx}>
            <Link
              href={''}
              key={idx}
              className="text-xl hover:underline hover:font-bold"
            >
              {category}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
