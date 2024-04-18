import fs from "fs/promises";
import matter from 'gray-matter';
import path from "path";

export enum BlogPostCategory {
  ALL = 'All',
  SHAREPOINT = 'Sharepoint/Office 365',
  CONSULTING = 'Consulting',
  SQL = 'SQL Server Database',
  ANALYTICS = 'Analytics, B.I.',
  ETL = 'ETL',
}

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  previewText: string;
  categorie: BlogPostCategory[];
  content: string;
}
// const basePath: string = './posts';

// export const postsPerPage = 3 as const;
export async function getPosts(): Promise<Post[]> {
  // Retrieve slugs from post routes
  console.log(path.join(process.cwd(), '(posts)'));
  const postFiles = (
    await fs.readdir(path.join(process.cwd(), '(posts)'), { withFileTypes: true })
  ).filter((dirent) => dirent.name.includes('.md'));

  // Retrieve metadata from MDX files
  const postsRead = await Promise.all(
    postFiles.map(async ({ name }) => {
      const filePath = path.join(path.join(process.cwd(), '(posts)'), name);
      const blogPost = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(blogPost);
      return { ...data, content } as Post;
    })
  );

  // Sort posts from newest to oldest
  postsRead.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
  return postsRead;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}


export async function getPostsByCategory({
  category,
}: {
  category: BlogPostCategory;
}): Promise<Post[]> {
  const allPosts = await getPosts();

  // Filter posts by specified category
  const posts = allPosts.filter(
    (post) => post.categorie.indexOf(category) !== -1
  );
  console.log(posts.length);
  return posts;
}

export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number; }> {
  const allPosts = await getPosts();

  // Get a subset of posts pased on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}

export async function getPaginatedPostsByCategory({
  page,
  limit,
  category,
}: {
  page: number;
  limit: number;
  category: BlogPostCategory;
}): Promise<{ posts: Post[]; total: number; }> {
  const allCategoryPosts = await getPostsByCategory({ category });

  // Get a subset of posts pased on page and limit
  const paginatedCategoryPosts = allCategoryPosts.slice(
    (page - 1) * limit,
    page * limit
  );

  return {
    posts: paginatedCategoryPosts,
    total: allCategoryPosts.length,
  };
};