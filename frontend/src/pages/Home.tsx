import BlogCard from "../components/common/BlogCard"
import { Post } from '../types/main';
import { data } from '../constants/dumm';

function Home() {
  return (
    <div className="w-full p-5 overflow-x-hidden ">
       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 box-border  overflow-x-hidden">
         {data && data.map((el: Post, ind:number) => <BlogCard key={`card-${ind}`} data={el} />)}
       </div>
    </div>
  )
}

export default Home
