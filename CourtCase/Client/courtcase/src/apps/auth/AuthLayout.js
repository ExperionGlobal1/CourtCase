import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../public/Navbar'

function AuthLayout() {
  return (
    <>
        <Navbar/>
        <Outlet></Outlet>
    </>
  )
}

export default AuthLayout