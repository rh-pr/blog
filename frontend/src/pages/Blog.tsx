import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types/main';
import { getPostById } from '../services/requst';
import parse from 'html-react-parser';
import defBlogImg from '../assets/images/defBlog.jpg';


function Blog() {
    const { id } = useParams();
    const [blogData, setBlogData] = useState<Post | null>(null);

    useEffect(() => {
      const fetchPost = async() => {
        if (id !== undefined) {
          const res = await getPostById(id || '0');
          setBlogData(res[0]);
        }
      }
      fetchPost();
      return setBlogData(null)
    },[])
  return (
    <div className='flex p-5 w-full justify-center'>
      {blogData &&  <div className='flex flex-col items-center gap-5 p-5 w-8/12 font-roboto'>
           <p className=' text-4xl font-bold pb-2'>{blogData.title}</p>
           <p className='self-end font-medium' >{(new Date(blogData.createdata)).toISOString().split('T')[0]}</p>
           <p className='w-full h-80'>  <img src={ typeof blogData.image === 'string'  ? blogData.image : defBlogImg} alt="img" className='w-full h-full object-cover rounded-lg' /></p>
           <p className='text-justify text-md bg-white color-black'>{parse(`${blogData.post}`)}</p>
       </div>}
    </div>
  )
}

export default Blog
