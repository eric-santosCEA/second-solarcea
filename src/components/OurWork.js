import React, { lazy } from 'react'
import { FaSolarPanel } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { BsHouseDoor } from 'react-icons/bs'
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

        <div className="images">
          <picture>
            <div className="content">
              <FaSolarPanel />
              <h4>Katy, TX</h4>
            </div>
            <img
              src="./photos/katy1.webp"
              alt="third img"
              width="450"
              height="300"
            />
          </picture>

          <picture>
            <div className="content">
              <FiSun />
              <h4>Houston, TX</h4>
            </div>
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
          </picture>
          <picture>
            <div className="content">
              <BsHouseDoor />
              <h4>El Paso, TX</h4>
            </div>
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
          </picture>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default OurWork
