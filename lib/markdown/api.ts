import { supabase } from "../db/supabase";
import markdownToHtml from "./markdownToHtml";

export type Post = {
	title: string;
	slug: string;
	created_at: string;
	desc: string;
	date: string;
	author: string;
	tags: string;
	content: string;
	display: boolean;
	last_updated_at: string;
};

async function postToMarkdownPost(post: Post): Promise<Post> {
	return {
		...post,
		content: await markdownToHtml(post.content),
	};
}

export async function getPostBySlug(slug: string): Promise<Post> {
	const { error, body } = await supabase
		.from<Post>("blog_posts")
		.select("*")
		.eq("slug", slug);
	if (error) {
		return null;
	}
	return postToMarkdownPost(body[0]);
}

export async function getAllPosts(): Promise<Post[]> {
	const { error, body } = await supabase.from<Post>("blog_posts").select("*");
	if (error) {
		return null;
	}
	const markdownPosts = Promise.all(body.map(postToMarkdownPost));
	return markdownPosts;
}
