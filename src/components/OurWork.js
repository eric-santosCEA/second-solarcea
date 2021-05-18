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
            <img src="./photos/katy1.png" alt="third img" height="250" />
          </picture>

          <picture>
            <div className="content">
              <FiSun />
              <h4>Houston, TX</h4>
            </div>
            <img
              srcSet="./photos/houston1.png 1440w"
              sizes="(max-width: 600px) 1440px"
              src="./photos/houston1.png"
              alt="third img"
              width="450"
              height="300"
            />
            <img
              srcSet="./photos/houston2.png 1440w"
              sizes="(max-width: 600px) 1440px"
              src="./photos/houston2.png"
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
              srcSet="./photos/elpaso1.webp 500w"
              sizes="(max-width: 600px) 1440px"
              src="./photos/elpaso1.webp"
              alt="third img"
              width="450"
            />
            <img
              srcSet="./photos/elpaso2.png 1440w"
              sizes="(max-width: 600px) 1440px"
              src="./photos/elpaso2.png"
              alt="third img"
              width="450"
              height="350"
            />
          </picture>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default OurWork
