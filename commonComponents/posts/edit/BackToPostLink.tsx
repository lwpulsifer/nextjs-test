import Link from 'next/link';

export default function BackToPostLink({slug}: {slug : string}) {
	return (
		<span className="rounded-full py-1 px-2 bg-red-400">
			<Link href={`/posts/${slug}`}>Back to post</Link>
		</span>
	)
}