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
          <img src="./photos/logo.webp" alt="logo" />
        </Link>
        <div className={active ? 'links open' : 'links'}>
          <Link to="/solar-basics" className="link">
            <h1>Solar Basics</h1>
          </Link>
          <Link to="/solar-basics" className="link">
            <h1>Solar Basics</h1>
          </Link>
          <Link to="/solar-basics" className="link">
            <h1>Solar Basics</h1>
          </Link>
        </div>
        <div className="icon">
          <BiMenuAltRight onClick={handleClick} size="3rem" />
        </div>
      </nav>
    </>
  )
}
export default Navlinks
