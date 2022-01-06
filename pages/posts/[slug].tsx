import BasePage from "../../components/BasePage";
import { getAllPosts, getPostBySlug } from "../../lib/markdown/api";
import markdownToHtml from "../../lib/markdown/markdownToHtml";
import BaseCard from "../../components/BaseCard";
import Head from "next/head";
import { Post } from "../../lib/markdown/api";
import PostBody from "../../components/posts/PostBody";
import PostTitle from "../../components/posts/PostTitle";
import PostFooter from "../../components/posts/PostFooter";

type BlogPostProps = {
  post: Post;
};

function BlogPost({ post }: BlogPostProps) {
  if (!post) {
    return null;
  }

  return (
    <BasePage>
      <Head>
        <title>
          {post ? `${post.title} — ${post.author}` : "Blog Post"}
        </title>
      </Head>
      <BaseCard additionalClassNames={"font-serif font-thin"}>
        <PostTitle title={post.title} />
        <section className="w-11/12 p-3">
          <PostBody post={post} />
          <PostFooter post={post} />
        </section>
      </BaseCard>
    </BasePage>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPost;
