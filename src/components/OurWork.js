import React from 'react'
import { FaSolarPanel } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { BsHouseDoor } from 'react-icons/bs'
import '../styles/our-work.css'

const OurWork = () => {
  return (
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
            srcSet="./photos/ferris-wheel.jpg 1440w"
            sizes="(max-width: 600px) 1440px"
            src="./photos/ferris-wheel.jpg"
            alt="third img"
          />
        </picture>

        <picture>
          <div className="content">
            <FiSun />
            <h4>El Paso, TX</h4>
          </div>
          <img
            srcSet="./photos/ferris-wheel.jpg 1440w"
            sizes="(max-width: 600px) 1440px"
            src="./photos/ferris-wheel.jpg"
            alt="third img"
          />
        </picture>
        <picture>
          <div className="content">
            <BsHouseDoor />
            <h4>Houston, TX</h4>
          </div>
          <img
            srcSet="./photos/ferris-wheel.jpg 1440w"
            sizes="(max-width: 600px) 1440px"
            src="./photos/ferris-wheel.jpg"
            alt="third img"
          />
        </picture>
      </div>
    </div>
  )
}
export default OurWork
