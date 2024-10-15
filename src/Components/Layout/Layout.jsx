import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <NavigationBar/>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer/>
      </>
  )
}