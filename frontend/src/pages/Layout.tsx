import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function Layout() {
  return (
    <div>
       <Header />
       <div className='flex'>
            <Outlet />
       </div>
    <Footer />
    </div>
  )
}

export default Layout
