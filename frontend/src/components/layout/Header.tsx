import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

type Menu = {
    text: string,
    path: string
}

function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const menu: Menu[] = [
    {text: 'Nature', path: '/'},
    {text: 'Technology', path: '/'},
    {text: 'Learning', path: '/'},
    {text: 'Motivation', path: '/'}
  ]

  const taggleMenu = () => {
    console.log(isOpenMenu)
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <div className="border-b">
        <div className="p-5 flex justify-between">
        <Link to={'/'}>
            <span className="text-2xl font-black" >BLOGER</span>
        </Link>
        <div className="hidden md:flex items-center">
            <ul className="flex">
                {menu.map((el: Menu, ind: number) => {
                    return <li key={`men-${ind}`}><Link className="p-2 font-medium" to={el.path}>{el.text}</Link></li>
                })}
            </ul>
            <button className="text-white bg-black px-2 py-2 rounded text-sm font-bold">
                <Link to={'/'}>+ New Post</Link>
            </button>
        </div>
        <IoMenu onClick={() => taggleMenu()} className="text-4xl md:hidden" />
        {isOpenMenu && 
        <div className="flex md:hidden w-4/12 flex-col items-start text-start gap-4 fixed right-1 top-16 p-5 rounded  border-b-2 bg-white">
            <ul className="flex flex-col gap-2">
                {menu.map((el: Menu, ind: number) => {
                    return <li key={`men-${ind}`}><Link className="p-2 font-medium" to={el.path}>{el.text}</Link></li>
                })}
            </ul>
            <button className="text-white bg-black px-2 py-2 rounded text-sm font-bold">
                <Link to={'/'}>+ New Post</Link>
            </button>
            </div>}
        </div>
    </div>
  )
}

export default Header
