import React, { lazy } from 'react'
import '../styles/partner.css'
import Navlinks from './Navlinks'
import Button from './Button'

const Footer = lazy(() => import('./Footer'))

const SalesPartner = () => {
  return (
    <>
      <Navlinks />
      <div className="partner">
        <h1>Join Cea</h1>
        <picture>
          <img
            src="./photos/original3.webp"
            alt="el paso"
            height="300"
            width="375"
          />
        </picture>

        <p>
          Your electric bill may be the HIGHEST cost of your monthly utility
          bill, not counting the actual amount of electricity used. CEA is
          making it easy to switch to solar with a lower fixed energy rate.
        </p>
        <section className="buttons">
          <a href="https://clean-energy-america.estimate.demand-iq.com/">
            <Button>See if your property qualifies</Button>
          </a>
          <a href="https://ceadash.com/application/">
            <Button>Become A Partner</Button>
          </a>
        </section>
      </div>
      <Footer />
    </>
  )
}
export default SalesPartner
