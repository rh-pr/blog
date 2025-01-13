import { Post } from '../../types/main';

function BlogCard({data}: {data: Post}) {
    return (
      <div className="rounded-lg p-2 flex flex-col shadow-lg shadow-black-500/40 box-border overflow-x-hidden max-h-[500px]">
        <div className="w-full h-52 pt-5 overflow-hidden">
          <img src={data.url} alt="" className="rounded object-cover"/>
        </div>
        <div className="w-full max-h-[47vh] p-2 flex flex-col justify-start ">
            <p className="w-full text-justify font-bold  ">{data.title}</p>
            <p className="w-full text-justify font-medium text-[12px] text-gray-700 ">{data.description}</p>
            <p className="w-full h-20 pb-5 pt-2 text-justify overflow-hidden line-clamp-3 ">{data.content}</p>
        </div>

      </div>
    );
  }
  
  export default BlogCard;
  