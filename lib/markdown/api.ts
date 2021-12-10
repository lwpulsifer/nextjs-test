import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export type PostHeaderData = {
  title: string;
  slug: string;
  desc: string;
  date: string;
  author: string;
  tags: string;
  display: boolean;
};

export type PostContent = string;

export type Post = {
  data: PostHeaderData;
  content: PostContent;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterContents = matter(fileContents) as unknown;
  return matterContents as Post;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(getPostBySlug)
    .filter((post) => post.data.display)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));
  return posts;
}
