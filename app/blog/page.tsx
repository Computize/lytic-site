import React, { useState } from 'react';
import { BlogPostCategory, Post, getPosts } from '~/lib/getPosts';
import { BlogPreviewCardContainer } from '~/app/components/blogPage/blogPreviewCardContainer';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { generateMetadata } from '~/app/constants/pageMetadata';
import { BlogCategories } from '~/app/components/blogPage/blogCategories';

export const metadata = generateMetadata('Blog');

interface Params {
  slug: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export type BlogPreview = Post;

export default async function Page({ params }: { params: Params; searchParams: SearchParams }) {
  const posts = await getPosts();
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <PageUpperImageContainer imageSource="/blog-page-banner.png">
        <PageTitle
          title="PRESIDENT'S BLOG"
          className="text-center"
        />
      </PageUpperImageContainer>
      <div className="py-10 p-6 flex flex-col sm:flex-col lg:flex-row justify-center gap-10 w-full md:w-10/12">
        <BlogPreviewCardContainer blogItems={posts} />
        <BlogCategories />
      </div>
    </main>
  );
}
