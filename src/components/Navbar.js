import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="link">
            Logo/Home
          </Link>
        </li>
        <li>
          <Link to="solar-basics" className="link">
            Solar Basics
          </Link>
        </li>
        <li>
          <Link to="sales-partner" className="link">
            Sales Partner
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
