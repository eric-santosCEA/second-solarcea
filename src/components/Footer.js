import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="work" className="link">
            Our Work
          </Link>
        </li>
        <li>
          <Link to="contact" className="link">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="Hiring" className="link">
            Hiring
          </Link>
        </li>
      </ul>
    </footer>
  )
}
export default Footer
