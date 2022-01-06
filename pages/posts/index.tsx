import BasePage from "../../components/BasePage";
import { getAllPosts } from "../../lib/markdown/api";
import { Post } from "../../lib/markdown/api";
import BaseCard from "../../components/BaseCard";
import PostsList from "../../components/posts/PostsList";

export default function PostsPage({ posts } : { posts: Post[] }) {
  return (
    <BasePage>
      <BaseCard>
        <PostsList posts={posts ?? []} />
      </BaseCard>
    </BasePage>
  );
} 

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
