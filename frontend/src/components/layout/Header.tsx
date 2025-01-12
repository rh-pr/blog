import { Link } from "react-router-dom"

type Menu = {
    text: string,
    path: string
}

function Header() {

    const menu: Menu[] = [
        {text: 'Nature', path: '/'},
        {text: 'Technology', path: '/'},
        {text: 'Learning', path: '/'},
        {text: 'Motivation', path: '/'}
    ]

  return (
    <div className="border-b">
    <div className="p-5 flex justify-between">
      <Link to={'/'}>
        <span className="text-2xl font-black" >BLOGER</span>
      </Link>
      <div className="flex items-center">
          <ul className="flex">
              {menu.map((el: Menu, ind: number) => {
                  return <li key={`men-${ind}`}><Link className="p-2 font-medium" to={el.path}>{el.text}</Link></li>
              })}
          </ul>
          <button className="text-white bg-black px-2 py-1 rounded text-sm font-bold">
            <Link to={'/'}>+ New Post</Link>
          </button>
      </div>
    </div>
  </div>
  )
}

export default Header
