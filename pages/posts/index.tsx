import BasePage from "../../components/BasePage";
import { getAllPosts } from "../../lib/markdown/api";
import { Post } from "../../lib/markdown/api";
import markdownToHtml from "../../lib/markdown/markdownToHtml";
import BaseCard from "../../components/BaseCard";
import PostsList from "../../components/posts/PostsList";

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
