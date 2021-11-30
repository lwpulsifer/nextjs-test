import { Post } from "../../lib/markdown/api";

export default function PostFooter({ post }: { post: Post}) {
  return (
    <div className={'w-full flex justify-end'}>
      {`— ${post.data.author.split(" ")[0]}`}
    </div>
  )
}