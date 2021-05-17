import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="link">
        Logo Home
      </Link>

      <Link to="solar-basics" className="link">
        Solar Basics
      </Link>

      <Link to="sales-partner" className="link">
        Sales Partner
      </Link>
    </nav>
  )
}
export default Navbar
