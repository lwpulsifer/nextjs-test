import Head from "next/head";
import BaseCard from "../../components/BaseCard";
import BasePage from "../../components/BasePage";
import PostBody from "../../components/posts/PostBody";
import PostFooter from "../../components/posts/PostFooter";
import PostTitle from "../../components/posts/PostTitle";
import { getAllPosts, getPostBySlug } from "../../lib/markdown/api";
import { Post } from "../../lib/markdown/api";
import markdownToHtml from "../../lib/markdown/markdownToHtml";

// @ts-ignore: Resolution from node modules, should be able to fix this in ts-config but not sure how.
import prismTheme from "prismjs/themes/prism-okaidia.css";

type BlogPostProps = {
  post: Post;
};

function BlogPost({ post }: BlogPostProps) {
  if (!post) {
    return null;
  }

  const { data: postData, content: postContent } = post;
  return (
    <BasePage>
      <Head>
        <title>{post ? `${postData.title} — ${postData.author}` : "Blog Post"}</title>
        <style jsx global>
          {prismTheme}
        </style>
      </Head>
      <BaseCard className={"font-serif font-thin"}>
        <PostTitle title={postData.title} />
        <section className="w-11/12 p-3">
          <PostBody post={post} />
          <PostFooter post={post} />
        </section>
      </BaseCard>
    </BasePage>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        data: post.data,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.data.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPost;
