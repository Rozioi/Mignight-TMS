import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

import './Layout.css'

const Layout = () => {


  return (
    <div className='site-divided'>
      <Header />
          <main style={{ height: "85%",marginTop: "105px" }}>
            <Outlet />
          </main>
          
        
          
          
        
      

    </div>


  )
}

export default Layout