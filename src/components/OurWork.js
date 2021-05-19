import React, { lazy } from 'react'
import '../styles/our-work.css'

const Footer = lazy(() => import('./Footer'))

const OurWork = () => {
  return (
    <>
      <div className="work">
        <section className="title">Our Work</section>
        <figure>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>
              Solar energy is the cheapest source of energy in the world as of
              2017.
            </p>
          </blockquote>
        </figure>
      </div>
      <div className="images">
        <picture>
          <img
            src="./photos/houston1.webp"
            alt="third img"
            width="450"
            height="300"
          />
          <img
            src="./photos/houston2.webp"
            alt="third img"
            width="450"
            height="300"
          />

          <img
            src="./photos/elpaso1-500.webp"
            alt="el paso tx"
            width="450"
            height="300"
          />
          <img
            src="./photos/elpaso2.webp"
            alt="el paso tx"
            width="450"
            height="300"
          />

          <img
            src="./photos/original1.webp"
            alt="el paso tx"
            width="450"
            height="300"
          />
          <img
            src="./photos/original2.webp"
            alt="el paso tx"
            width="450"
            height="300"
          />
          <img
            src="./photos/original3.webp"
            alt="el paso tx"
            width="450"
            height="300"
          />
          <img
            src="./photos/original4.webp"
            alt="el paso tx"
            width="450"
            height="300"
          />
          <img
            src="./photos/original5.webp"
            alt="el paso tx"
            width="450"
            height="300"
          />

          <img
            src="./photos/katy1.webp"
            alt="third img"
            width="450"
            height="300"
          />
        </picture>
      </div>
      <Footer />
    </>
  )
}
export default OurWork
