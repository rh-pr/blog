import BlogCard from "../components/common/BlogCard"
import { Post } from '../types/main';
// import { data } from '../constants/dumm';
import { useEffect, useState } from "react";
import { getPosts, getPostsByCategory } from '../services/requst';
import { useLocation } from "react-router-dom";

function Home() {
  const [data, setData] = useState<Post[]>([]);
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const category = queryParam.get('category');

  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        const res = await getPostsByCategory(category);
        setData(res);
      } else {
        const res = await getPosts();
        setData(res);
      }
    }
    fetchData();
  }, [category]);

  return (
    <div className="w-full p-5 overflow-x-hidden ">
       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 box-border  overflow-hidden">
         {data && data.length > 0 ? data.map((el: Post, ind:number) => <BlogCard key={`card-${ind}`} data={el} />) :
                <div className="w-screen text-center pt-20 font-robot font-bold">We don't have any blogs in this category... <br /> 
                     But you can add some ...
                </div>}
       </div>
    </div>
  )
}

export default Home
