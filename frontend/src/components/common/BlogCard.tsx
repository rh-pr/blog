import { useNavigate } from 'react-router-dom';
import { Post } from '../../types/main';
import parse from 'html-react-parser';
import defBlogImg from '../../assets/images/defBlog.jpg';

function BlogCard({data}: {data: Post}) {
  const navigate = useNavigate();

  const navigetToBlog = () => {
    navigate(`/blog/${data.id}`)
  }
    return (
      <div onClick={() => navigetToBlog()} className="rounded-lg px-2 pb-2  bg-white flex flex-col shadow-lg shadow-black-500/40 box-border overflow-x-hidden max-h-[500px] duration-500 hover:scale-105  ">
        <div className="w-full h-52 pt-5 overflow-hidden">
         <img src={ typeof data.image === 'string'  ? data.image : defBlogImg} alt="" className="rounded object-cover"/>
        </div>
        <div className="w-full max-h-[47vh] p-2 flex flex-col justify-start font-roboto">
            <p className="w-full text-justify font-bold  ">{data.title}</p>
            <p className="w-full text-justify font-medium text-[12px] text-gray-700 ">{data.category}</p>
            <p className="w-full h-20 pb-5 pt-2 text-justify overflow-hidden line-clamp-3 ">{parse(`${data.post}`)}</p>
        </div>

      </div>
    );
  }
  
  export default BlogCard;
  