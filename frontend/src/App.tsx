import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/'  element={<Home />} />
          <Route path='/blog'  element={<Blog />} />
          <Route path='/createBlog'  element={<CreateBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
