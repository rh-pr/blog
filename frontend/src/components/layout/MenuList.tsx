import { Link } from "react-router-dom"
import { Menu } from '../../types/main';
import { menu } from '../../constants/main';
import { useState } from "react";

function MenuList({type}: {type: string}) {
  
  const [ activeMenu, setActiveMenu ] = useState<string>('')

  return (
    <ul className={`flex ${type == 'vert' ? 'flex-col gap-2' : ''}`}>
        {menu.map((el: Menu, ind: number) => {
            return <li onClick={() => setActiveMenu(el.text)} className={`${activeMenu === el.text ? 'text-green-300' : ''}`} key={`men-${ind}`}><Link className={`p-2 font-medium `} to={el.path}>{el.text}</Link></li>
        })}
    </ul>
  )
}

export default MenuList
