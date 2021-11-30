import Link from 'next/link';
import Image from 'next/image';

export default function BackToPostsLink() {
  return (
    <Link href="/posts" passHref>
      <span className="hover:underline hover:cursor-pointer flex items-center" >
        <Image src={'/left-arrow.png'} width={20} height={20} alt="Back to posts" />
        Back to posts 
      </span>
    </Link>
  )
}