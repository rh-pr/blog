import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Menu } from '../../types/main';
import { menu } from '../../constants/main';
import { useNavigate } from "react-router-dom";

function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('');

  const navigate = useNavigate();


  const taggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  const handleClick = (category: string) => {
    setActiveMenu(category);
    navigate(`/blogs?category=${category}`);

  }

  return (
    <div className="border-b sticky top-0 bg-white">
        <div className="p-5 flex justify-between">
        <Link to={'/'}>
            <span onClick={() => setActiveMenu('')} className="text-2xl font-black" >BLOGER</span>
        </Link>
        <div className="hidden md:flex items-center">
            <ul className="flex">
                {menu.map((el: Menu, ind: number) => {
                    return <li onClick={() => handleClick(el.text) } key={`men-${ind}`}><Link className={ `p-2 font-medium ${activeMenu === el.text ? 'font-[900] underline' : ''}`} to={el.path}>{el.text}</Link></li>
                })}
            </ul>
            <button className="text-white bg-black px-2 py-2 rounded-lg text-sm font-bold">
                <Link to={'/createBlog'}>+ New Post</Link>
            </button>
        </div>
        <IoMenu onClick={() => taggleMenu()} className="text-4xl md:hidden" />
        {isOpenMenu && 
        <div className="flex md:hidden w-4/12 flex-col items-start text-start gap-4 fixed right-1 top-16 p-5 rounded  border-b-2 bg-white">
            <ul className="flex flex-col gap-2">
                {menu.map((el: Menu, ind: number) => {
                    return <li onCanPlay={() => handleClick(el.text)} key={`men-${ind}`}><Link className={ `p-2 font-medium ${activeMenu === el.text ? 'font-[900] underline' : ''}`} to={el.path}>{el.text}</Link></li>
                })}
            </ul>
            <button className="text-white bg-black px-2 py-2 rounded-lg text-sm font-bold">
                <Link to={'/createBlog'}>+ New Post</Link>
            </button>
            </div>}
        </div>
    </div>
  )
}

export default Header
