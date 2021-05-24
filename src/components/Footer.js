import React from 'react'
import '../styles/footer.css'
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1>Contact</h1>
        <div className="addresses">
          <address>
            <h2>EL Paso, TX</h2>
            <h4>6600 N Mesa St STE 502, El Paso, TX 79912</h4>
            <h4>Phone: (915) 201-2631</h4>
            <a href="mailto:jim@rock.com">
              <h4>support@joincea.com</h4>
            </a>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
          <address>
            <h2>Houston, TX</h2>
            <h4>13105 Northwest Freeway, STE 1260 Houston, TX 77040</h4>
            <h4>Phone: (915) 201-2631</h4>
            <a href="mailto:jim@rock.com">
              <h4>support@joincea.com</h4>
            </a>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
        </div>
        <div className="follow-us">
          <h1>Follow Us</h1>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/cleanenergyamerica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className="icon" />
            </a>
            <a
              href="https://www.instagram.com/cleanenergyamerica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/clean-energy-america/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="icon" />
            </a>
            <a
              href="mailto:support@joincea.com?subject=website referral"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail className="icon" />
            </a>
            <a href="tel:915-201-2631">
              <FiPhone className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2021 Clean Energy America</p>
      </div>
    </>
  )
}
export default Footer
