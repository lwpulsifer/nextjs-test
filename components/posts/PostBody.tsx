import { Post } from '../../lib/markdown/api';

export default function PostBody({ post }: { post: Post }) {
  return (
    <section
      className=""
    >
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
  )
}