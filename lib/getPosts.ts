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
  category: BlogPostCategory;
  content: string;
}

export async function getPosts(category: BlogPostCategory = BlogPostCategory.ALL): Promise<Post[]> {
  // Retrieve slugs from post routes
  const postFiles = (
    await fs.readdir(path.join(process.cwd(), '(posts)'), { withFileTypes: true })
  ).filter((dirent) => dirent.name.includes('.md'));

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    postFiles.map(async ({ name }) => {
      const filePath = path.join(path.join(process.cwd(), '(posts)'), name);
      const blogPost = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(blogPost);
      return { ...data, content } as Post;
    })
  );
  if (category === BlogPostCategory.ALL) {
    return sortPostsByDate(posts);
  } else {
    const postsByCategory = posts.filter((post) => {
      return (post.category === category);
    });
    return sortPostsByDate(postsByCategory);
  }
  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
  return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}


function sortPostsByDate(posts: Post[]) {
  return posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
}