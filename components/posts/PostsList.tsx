import { useState } from "react";
import { Post } from "../../lib/markdown/api";
import MinimalPost from "./MinimalPost";

function getTags(post: Post) {
  return post.data.tags.split(",");
}

function hasTagWithPrefix(post: Post, prefix: string) {
  return getTags(post).some((tag) => tag.startsWith(prefix));
}

export default function PostsList({ posts }: { posts: Post[] }) {
  const [postFilter, setPostFilter] = useState("");

  const filteredPosts = posts
    .filter((post) => post.data.display)
    .filter(
      (post) => postFilter === "" || hasTagWithPrefix(post, postFilter),
    );

  const listDisplay =
    filteredPosts.length > 0 ? (
      <ol
        className={
          "font-thin font-serif flex flex-col w-full justify-center items-center my-2"
        }
      >
        {filteredPosts.map((post) => (
          <MinimalPost key={post.data.slug} post={post} />
        ))}
      </ol>
    ) : (
      <div
        className={
          "font-thin font-serif flex flex-col justify-center items-center my-2 h-24"
        }
      >
        {`No posts`}
      </div>
    );

  return (
    <section className="w-full">
      <div className="w-full mb-3 py-3 px-8 bg-sky-300 flex md:flex-row flex-col items-center justify-between rounded-t-2xl gap-2">
        <h1 className="font-bold text-2xl">Blog Posts</h1>
        <span>
          <label htmlFor={""} className={"mr-2 font-serif hidden"}>
            Filter posts by tag
          </label>
          <input
            type={"search"}
            id={'tag-search'}
            list={'tag-options'}
            value={postFilter}
            onChange={(e) => setPostFilter(e.target.value)}
            className={
              "py-1 px-2 rounded-md focus:border-none focus:outline-none bg-sky-200 focus:shadow-md"
            }
            placeholder="Filter posts by tag"
          />
          <datalist id={'tag-options'}>
            {
              posts.flatMap(post => post.data.tags.split(",")).map(tag => 
                <option key={tag} value={tag} />
              )
            }
          </datalist>
        </span>
      </div>
      {listDisplay}
    </section>
  );
}
