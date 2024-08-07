import { Post } from "../../lib/markdown/api";

export default function PostFooter({ post }: { post: Post }) {
  const formattedDate = new Date(Date.parse(post.data.date)).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={"w-full flex justify-end"}>
      <span>{`— ${post.data.author.split(" ")[0]}, ${formattedDate}`}</span>
    </div>
  );
}
