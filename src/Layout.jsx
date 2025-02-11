import React from 'react'
import { Outlet } from 'react-router'
import MainHeader from './MainHeader/MainHeader'

function Layout() {
  return (
    <>
    <MainHeader/>
    <Outlet/>
    </>
  )
}

export default Layout
