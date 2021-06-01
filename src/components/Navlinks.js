import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import '../styles/navlinks.css'

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
}

const Navlinks = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <Link to="/">
        <motion.img
          src="./photos/solar-long-logo50.png"
          height="50"
          alt="logo"
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </Link>
      <motion.div
        className={active ? 'open' : 'navlinks'}
        animate={active ? 'open' : 'closed'}
        variants={variants}
      >
        <Link to="/" className="navlink">
          <h1>Home</h1>
        </Link>
        <Link to="/solar-basics" className="navlink">
          <h1>Solar Basics</h1>
        </Link>
        <Link to="/sales-partner" className="navlink">
          <h1>Sales Partner</h1>
        </Link>
        <Link to="/work" className="navlink">
          <h1>Our Work</h1>
        </Link>

        <a
          href="https://ceadash.com/application/"
          target="_blank"
          rel="noopener noreferrer"
          className="navlink"
        >
          <h1>Careers</h1>
        </a>
      </motion.div>
      <div className="nav-icon">
        <AiOutlineMenu size="2.5rem" onClick={handleClick} />
      </div>
    </>
  )
}
export default Navlinks
