import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function Layout() {
  return (
    <div className='min-h-screen font-roboto'>
       <Header />
       <div className='flex min-h-[77vh]  overflow-x-hidden box-border'>
            <Outlet></Outlet>
       </div>
       <Footer />
    </div>
  )
}

export default Layout
