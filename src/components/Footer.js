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
            <h2>Texas HQ Office</h2>
            <h4>
              6600 N Mesa St STE 502,
              <br /> El Paso, TX 79912
            </h4>
            <h4>Phone: (915) 201-2631</h4>
            <a href="mailto:support@joincea.com">
              <h4>support@joincea.com</h4>
            </a>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
          <address>
            <h2>Houston, TX</h2>
            <h4>
              13105 Northwest Freeway,
              <br /> STE 1260 Houston, TX 77040
            </h4>
            <h4>Phone: (915) 201-2631</h4>
            <a href="mailto:support@joincea.com">
              <h4>support@joincea.com</h4>
            </a>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
          <address>
            <h2>Arizona HQ Office</h2>
            <h4>56th PI, Scottsdale, AZ 85257</h4>
            <h4>Phone: (915) 201-2631</h4>
            <a href="mailto:support@joincea.com">
              <h4>support@joincea.com</h4>
            </a>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
          <address>
            <h2>Florida HQ Office</h2>
            <h4>
              12221 N. US-301
              <br /> Thonotosassa, FL 33592
            </h4>
            <h4>Phone: (915) 201-2631</h4>
            <a href="mailto:support@joincea.com">
              <h4>support@joincea.com</h4>
            </a>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
          <address>
            <h2>Nevada HQ Office</h2>
            <h4>
              970 W 190th, STE 302
              <br /> Torence, CA 90502
            </h4>
            <h4>Phone: (915) 201-2631</h4>
            <a href="mailto:support@joincea.com">
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
              <FiFacebook className="icon" aria-label="facebook" />
            </a>
            <a
              href="https://www.instagram.com/cleanenergyamerica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="icon" aria-label="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/clean-energy-america/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="icon" aria-label="linkedin" />
            </a>
            <a
              href="mailto:support@joincea.com?subject=website referral"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail className="icon" aria-label="email" />
            </a>
            <a href="tel:915-201-2631">
              <FiPhone className="icon" aria-label="phone number" />
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
