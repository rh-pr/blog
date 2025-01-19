import BlogCard from "../components/common/BlogCard"
import { Post } from '../types/main';
// import { data } from '../constants/dumm';
import { useEffect, useState } from "react";
import { getPosts, getPostsByCategory } from '../services/requst';
import { useLocation } from "react-router-dom";
import defImg from '../assets/images/def.jpg';
import  { borderImg }  from '../constants/main';

function Home() {
  const [data, setData] = useState<Post[]>([]);
  const [categImg, setCategImg] = useState<string>(defImg)
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const category = queryParam.get('category');

  useEffect(() => {
    if (category) {
      type BorderImgKeys = keyof typeof borderImg;
      const imgAlt: BorderImgKeys =  category.toLowerCase() as BorderImgKeys;

      setCategImg( borderImg[imgAlt]);
    } else {
      setCategImg(defImg);
    }

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
        <div className="p-10 md:p-40 mx-2 bg-no-repeat bg-cover bg-center rounded-lg text-white font-black text:md md:text-4xl italic font-roboto text-center " style={{backgroundImage: `url(${categImg})`}}> 
          {category ? category : 'A Little Bit of Everything, All in One Place'}
        </div>
       <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 box-border  overflow-hidden">
         {data && data.length > 0 ? data.map((el: Post, ind:number) => <BlogCard key={`card-${ind}`} data={el} />) :
                <div className="w-screen text-center pt-20 font-robot font-bold">We don't have any blogs in this category... <br /> 
                     But you can add some ...
                </div>}
       </div>
    </div>
  )
}

export default Home
