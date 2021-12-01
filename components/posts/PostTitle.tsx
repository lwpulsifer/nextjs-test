import BackToPostsLink from './BackToPostsLink';

type PostTitleProps = {
  title?: string,
}

export default function PostTitle({ title = 'Blog Post' }: PostTitleProps) {
  return (
    <div className="title-section w-full mb-3 py-3 bg-sky-300 flex items-center justify-center rounded-t-2xl">
      <span className="flex items-center justify-between w-11/12">
        <h1 className="font-bold text-2xl">
          {title}
        </h1>   
        <BackToPostsLink />
      </span>
    </div>   
  )
}