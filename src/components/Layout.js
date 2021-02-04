import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={() => toggleSidebar()} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
