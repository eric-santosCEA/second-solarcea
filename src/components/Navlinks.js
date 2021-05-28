import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import '../styles/navlinks.css'

const Navlinks = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <nav>
        <Link to="/">
          <img src="./photos/solar-long-logo50.png" alt="logo" height="50" />
        </Link>
        <div className={active ? 'links open' : 'links'}>
          <Link to="/" className="link">
            <h1>Home</h1>
          </Link>
          <Link to="/sales-partner" className="link">
            <h1>Sales Partner</h1>
          </Link>
          <Link to="/solar-basics" className="link">
            <h1>Solar Basics</h1>
          </Link>
          <Link to="/work" className="link">
            <h1>Our Work</h1>
          </Link>

          <a
            href="https://ceadash.com/application/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <h1>Careers</h1>
          </a>
        </div>
        <div className="icon">
          <BiMenuAltRight onClick={handleClick} size="3rem" />
        </div>
      </nav>
    </>
  )
}
export default Navlinks
