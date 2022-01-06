import { supabase } from "../db/supabase";

export type Post = {
  title: string;
  slug: string;
  created_at: string,
  desc: string;
  date: string;
  author: string;
  tags: string;
  content: string,
  display: boolean,
  last_updated_at: string,
};

export async function getPostBySlug(slug: string) {
  const { error, body } = await supabase
    .from<Post>("blog_posts")
    .select("*")
    .eq("slug", slug);
  if (error) {
    return null;
  }
  return body[0];
}

export async function getAllPosts() {
  const { error, body } = await supabase
    .from<Post>("blog_posts")
    .select("*");
  if (error) {
    return null;
  }
  return body;
}
