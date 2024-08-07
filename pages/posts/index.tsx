import BaseCard from "../../components/BaseCard";
import BasePage from "../../components/BasePage";
import PostsList from "../../components/posts/PostsList";
import { getAllPosts } from "../../lib/markdown/api";
import { Post } from "../../lib/markdown/api";
import markdownToHtml from "../../lib/markdown/markdownToHtml";

export default function PostsPage({ posts }: { posts: Post[] }) {
  return (
    <BasePage>
      <BaseCard>
        <PostsList posts={posts} />
      </BaseCard>
    </BasePage>
  );
}

export async function getStaticProps() {
  const posts = await Promise.all(
    getAllPosts().map(async (post) => {
      const content = await markdownToHtml(post.content || "");
      return {
        data: post.data,
        content,
      };
    }),
  );
  return {
    props: {
      posts,
    },
  };
}
