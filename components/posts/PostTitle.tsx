type PostTitleProps = {
  title?: string,
}

export default function PostTitle({ title = 'Blog Post' }: PostTitleProps) {
  return (
    <h1 className="font-semibold text-2xl mb-3">
      {title}
    </h1>
  )
}