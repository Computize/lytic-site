import React, { useState } from 'react';
import { BlogPostCategory, Post, getPosts } from '~/lib/getPosts';
import { BlogPreviewCardContainer } from '~/app/components/blogPage/blogPreviewCardContainer';
import { PageTitle } from '~/app/components/pageTitle';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';
import { generateMetadata } from '~/app/constants/pageMetadata';
import { BlogCategories } from '~/app/components/blogPage/blogCategories';

export const metadata = generateMetadata('Blog');

export type BlogPreview = Post;

export default async function Page({ params: _params, searchParams }: { params: { slug: string }; searchParams?: { [key: string]: string | string[] | undefined } }) {
  const posts = await getPosts(searchParams ? (searchParams.category as BlogPostCategory) : BlogPostCategory.ALL);
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <PageUpperImageContainer imageSource="/blog-page-banner.png">
        <PageTitle
          title="PRESIDENT'S BLOG"
          className="text-center"
        />
      </PageUpperImageContainer>
      <div className="flex w-full flex-row justify-center border-2">
        <div className="py-10 p-6 flex flex-col sm:flex-col lg:flex-row justify-center gap-10 md:w-full">
          {posts.length > 0 ? (
            <BlogPreviewCardContainer
              blogItems={posts}
              columnDisplay={false}
            />
          ) : (
            <div className="text-center text-2xl">
              <p>We do not have any blog posts for that category.</p>
              <p>Stay tuned!</p>
            </div>
          )}
          <BlogCategories />
        </div>
      </div>
    </main>
  );
}
