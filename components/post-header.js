import Date from './date'
import CoverImage from './cover-image'
import PostExcerpt from './post-excerpt'
import ReadTime from './read-time'
import ProjectTag from './../public/project-tag.svg'

export default function PostHeader({ title, coverImage, date, excerpt }) {
  return (
    <>
      <div className="m-auto mt-12 lg:mt-16">
        <ProjectTag className="inline-block h-5 md:h-6 lg:h-10" />
        <div className="text-xl font-title md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none sm:mb-0 lg:mb-2 text-left mt-1 mr-4 ml-0 pl-0">
          <h1>{title}</h1>
        </div>
        <p className="text-base md:text-2xl lg:text-3xl mb-4 leading-relaxed lg:leading-relaxed mr-2 mt-4">
          {excerpt}
        </p>
        <div className="mb-6 text-base md:text-lg lg:text-xl text-grey-secondary font-normal">
          <Date dateString={date} />
        </div>
        {/* <div>{post.minutes}</div> */}
      </div>
      <div className="w-auto mb-8 md:mb-12 lg:mb-16">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
    </>
  )
}
