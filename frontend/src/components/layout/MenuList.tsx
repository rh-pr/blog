import { Link } from "react-router-dom"


type Menu = {
    text: string,
    path: string
}


function MenuList({type}: {type: string}) {
    const menu: Menu[] = [
        {text: 'Nature', path: '/'},
        {text: 'Technology', path: '/'},
        {text: 'Learning', path: '/'},
        {text: 'Motivation', path: '/'}
      ]

  return (
    <ul className={`flex ${type == 'vert' ? 'flex-col gap-2' : ''}`}>
        {menu.map((el: Menu, ind: number) => {
            return <li key={`men-${ind}`}><Link className="p-2 font-medium" to={el.path}>{el.text}</Link></li>
        })}
    </ul>
  )
}

export default MenuList
