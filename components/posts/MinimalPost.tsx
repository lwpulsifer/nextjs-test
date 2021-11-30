import { Post } from "../../lib/markdown/api";
import Link from 'next/link';

export default function MinimalPost({ post }: { post: Post }) {
  return (
    <li className="rounded-2xl border border-highlightHeader p-3 w-5/6">
      <Link href={`/posts/${post.data.slug}`}>
        {post.data.title}
      </Link>
      <div>{post.data.desc}</div>
    </li>
  )
}