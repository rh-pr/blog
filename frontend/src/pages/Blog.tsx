import { data } from '../constants/dumm';

function Blog() {
    const blogData = data[1];
  return (
    <div className='flex p-5 w-full justify-center'>
       <div className='flex flex-col items-center gap-5 p-5 w-8/12 font-roboto'>
           <p className=' text-4xl font-bold pb-2'>{blogData.title}</p>
           <p className='self-end font-medium'>{blogData.createDate}</p>
           <p className='w-full h-80'><img src={blogData.url} alt="img" className='w-full h-full object-cover rounded-lg' /></p>
           <p className='text-justify text-md'>{blogData.content}</p>
       </div>
    </div>
  )
}

export default Blog
