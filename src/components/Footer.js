import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Link to="work" className="link">
        Our Work
      </Link>

      <Link to="contact" className="link">
        Contact Us
      </Link>

      <Link to="hiring" className="link">
        Hiring
      </Link>
    </footer>
  )
}
export default Footer
