import React, { lazy } from 'react'
import '../styles/partner.css'

const Footer = lazy(() => import('./Footer'))

const SalesPartner = () => {
  return (
    <>
      <div>
        <h1 className="quote">Join Cea</h1>
      </div>

      <picture>
        <img
          src="./photos/elpaso1-500.webp"
          alt="el paso"
          height="300"
          width="375"
        />
      </picture>
      <section className="buttons">
        <a href="https://ceadash.com/application/">
          <button className="btn">Become A Sales Partner</button>
        </a>
        <a href="https://clean-energy-america.estimate.demand-iq.com/">
          <button className="btn">Get A Solar Quote!</button>
        </a>
      </section>
      <div className="quote lower">
        <figure>
          <blockquote>
            <p>
              Today, demand for solar in the United States is at an all-time
              high. The amount of solar power installed in the U.S. has
              increased more than 23 times over the past eight years -- from 1.2
              gigawatts (GW) in 2008 to an estimated 27.4 GW at the end of 2015.
              That’s enough energy to power the equivalent of 5.4 million
              average American homes, according to the Solar Energy Industries
              Association. The U.S. is currently the third-largest solar market
              in the world and is positioned to become the second.
            </p>
          </blockquote>
        </figure>
      </div>
      <Footer />
    </>
  )
}
export default SalesPartner
