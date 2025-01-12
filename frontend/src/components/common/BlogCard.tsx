import { Post } from '../../types/main';

function BlogCard({data}: {data: Post}) {
  return (
    <div className="w-3/12 rounded-lg p-2 flex flex-col shadow-lg shadow-black-500/40">
        <div className="w-full pt-5 ">
          <img src={data.url} alt="" className="rounded"/>
        </div>
        <div className="w-full p-2 flex flex-col justify-start">
          <p className="w-full text-justify font-bold">{data.title}</p>
          <p className="w-full text-justify pb-5">{data.description}</p>
        </div>
    </div>
  )
}

export default BlogCard
