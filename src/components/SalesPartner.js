import React, { lazy } from 'react'
import '../styles/partner.css'

const Footer = lazy(() => import('./Footer'))

const SalesPartner = () => {
  return (
    <div className="partner">
      <h1 className="title">Join Cea</h1>
      <picture>
        <img
          src="./photos/original3.webp"
          alt="el paso"
          height="300"
          width="375"
        />
      </picture>
      <section>
        <a href="https://ceadash.com/application/">
          <button className="btn">Become A Partner</button>
        </a>
        <a href="https://clean-energy-america.estimate.demand-iq.com/">
          <button className="btn">See if your home qualifies</button>
        </a>
      </section>
      <div className="quote">
        <figure>
          <blockquote>
            <p>
              Join CEA in this Nationwide movement to help switch homeowners to
              their local electric utilities Solar Interconnection Program.
            </p>
            <p>
              Switch your Electric Bill, for a lower, fixed, Solar Energy Bill.
            </p>
          </blockquote>
        </figure>
      </div>
      <Footer />
    </div>
  )
}
export default SalesPartner
