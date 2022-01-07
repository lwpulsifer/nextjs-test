import Link from "next/link";
import Image from "next/image";

export default function EditPostButton({ slug }: { slug: string }) {
	return (
		<Link href={`/posts/edit/${slug}`} passHref>
			<span
				className={
					"flex justify-center items-center gap-3 cursor-pointer align-center"
				}
			>
				Edit
				<Image src={"/edit.png"} width={16} height={16} alt={"Edit post"} />
			</span>
		</Link>
	);
}
