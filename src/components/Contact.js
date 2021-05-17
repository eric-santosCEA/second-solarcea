import React from 'react'
import { GoLocation } from 'react-icons/go'
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className="main">
      <address className="contact">
        <GoLocation size="2rem" color="green" className="icon" />
        <h3>Address:</h3>
        <p>6600 N Mesa St STE 502, El Paso, TX 79912</p>
        <AiOutlinePhone size="2rem" color="green" className="icon" />
        <h3>
          Phone: <a href="tel: +9152012631">(915) 201 2631</a>
        </h3>
        <AiOutlineMail size="2rem" color="green" className="icon" />

        <h3>
          Email: <a href="mailto:support@joincea.com">support@joincea.com</a>
        </h3>
      </address>
      <address className="contact">
        <GoLocation size="2rem" color="green" className="icon" />
        <h3>Address:</h3>
        <p>6600 N Mesa St STE 502, El Paso, TX 79912</p>
        <AiOutlinePhone size="2rem" color="green" className="icon" />
        <h3>
          Phone: <a href="tel: +9152012631">(915) 201 2631</a>
        </h3>
        <AiOutlineMail size="2rem" color="green" className="icon" />

        <h3>
          Email: <a href="mailto:support@joincea.com">support@joincea.com</a>
        </h3>
      </address>
      <div className="social-icons">
        <a href="https://www.facebook.com/cleanenergyamerica/" alt="facebook">
          <AiOutlineFacebook size="2rem" />
        </a>
        <a href="https://www.instagram.com/cleanenergyamerica/" alt="instagram">
          <AiOutlineInstagram size="2rem" />
        </a>
        <a
          href="https://www.linkedin.com/company/clean-energy-america/"
          alt="linkedin"
        >
          <AiOutlineLinkedin size="2rem" />
        </a>
      </div>
    </div>
  )
}
export default Contact
