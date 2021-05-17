import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="./photos/logo.png" alt="logo" height="50px" />
      </Link>
      <Link to="/" className="link">
        Home
      </Link>

      <Link to="solar-basics" className="link">
        Solar Basics
      </Link>

      <Link to="sales-partner" className="link">
        Sales Partner
      </Link>
      <BiMenuAltRight className="icon" size="3rem" />
    </nav>
  )
}
export default Navbar
