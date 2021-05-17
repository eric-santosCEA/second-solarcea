import React from 'react'
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
          <img
            srcSet="./photos/ferris-wheel.jpg 1440w"
            sizes="(max-width: 600px) 1440px"
            src="./photos/ferris-wheel.jpg"
            alt="third img"
          />
        </picture>

        <picture>
          <img
            srcSet="./photos/ferris-wheel.jpg 1440w"
            sizes="(max-width: 600px) 1440px"
            src="./photos/ferris-wheel.jpg"
            alt="third img"
          />
        </picture>
        <picture>
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
