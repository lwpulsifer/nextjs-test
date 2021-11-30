import BasePage from "../../components/BasePage";
import { getAllPosts } from "../../lib/markdown/api";
import { Post } from '../../lib/markdown/api';
import MinimalPost from "../../components/posts/MinimalPost";
import markdownToHtml from "../../lib/markdown/markdownToHtml";
import BaseCard from "../../components/BaseCard";

export default function PostsList({ posts }: { posts: Post[] }) {
  return (
    <BasePage>
      <BaseCard>
        <h1 className="w-full mb-3 py-3 bg-sky-300 flex items-center justify-center rounded-t-2xl font-bold text-2xl">Blog Posts</h1>
        <ol className={"font-thin font-serif flex flex-col w-full justify-center items-center my-2"}>
          {posts.map(post => <MinimalPost key={post.data.slug} post={post} />)}
        </ol>
      </BaseCard>
    </BasePage>
  )
}

export async function getStaticProps() {
  const posts = await Promise.all(getAllPosts()
    .map(async (post) => {
      const content = await markdownToHtml(post.content || '');
      return {
        data: post.data,
        content,
      }
    }));
  return {
    props: {
      posts,
    },
  };

}