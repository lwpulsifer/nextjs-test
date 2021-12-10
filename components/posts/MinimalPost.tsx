import { Post } from "../../lib/markdown/api";
import Link from "next/link";
import useHoverState from "../../hooks/useHoverState";

/**
 * TODO: Investigate using Tailwind's group property to simplify hover states/maybe remove hook usage.
 */
export default function MinimalPost({ post }: { post: Post }) {
  const formattedDate = new Date(Date.parse(post.data.date)).toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const { isHovered, eventListeners } = useHoverState();

  return (
    <li
      className="rounded-2xl border border-highlightHeader p-3 w-5/6 hover:cursor-pointer hover:shadow-md my-2"
      {...eventListeners}
    >
      <Link href={`/posts/${post.data.slug}`} passHref>
        <section className="">
          <div
            className={`flex justify-between ${
              isHovered ? "underline" : "no-underline"
            }`}
          >
            <div className="flex flex-col">
              <span className="font-bold">{post.data.title}</span>
              <span className="text-sm italic">{post.data.tags}</span>
            </div>
            <div className="italic">
              <span>{formattedDate}</span>
            </div>
          </div>
          <div className="no-underline">
            <span>{post.data.desc}</span>
          </div>
        </section>
      </Link>
    </li>
  );
}
