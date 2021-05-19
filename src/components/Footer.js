import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bottom-nav">
      <footer>
        <div className="links">
          <Link to="work" className="link">
            Our Work
          </Link>

          <Link to="contact" className="link">
            Contact Us
          </Link>

          <Link to="sales-partner" className="link">
            Careers
          </Link>
        </div>
      </footer>
      <div className="icons">facebook</div>
    </div>
  )
}
export default Footer
