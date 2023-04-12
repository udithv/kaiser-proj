import React from 'react'

import { Outlet } from "react-router-dom";
import NavBar from '../NavBar/NavBar';

export default function Layout() {
  return (
    <>
    <div className='container header-color'>
      <h1>Data Maintenance Application (DMA V2)</h1>
      <p>Version 1.1</p>
    </div>
    
    <NavBar />

    <Outlet />

    </>
  )
}
