import Image from "next/image";
import Link from "next/link";

export default function BackToPostsLink() {
  return (
    <Link href="/posts" passHref>
      <span className="hover:underline hover:cursor-pointer flex items-center">
        <Image
          src={"/left-arrow.png"}
          width={20}
          height={20}
          alt="Back to posts"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <span className="sm:block hidden">Back to posts</span>
      </span>
    </Link>
  );
}
