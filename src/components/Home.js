import React from 'react'
import '../styles/home.css'
import Footer from './Footer'
import OurWork from './OurWork'

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Clean Energy America</h1>
        <p>FOR A BETTER TOMORROW, CLEAN ENERGY TODAY.</p>
        <button>Join CEA!</button>
      </section>
      <section className="our-work">
        <OurWork />
      </section>
      <Footer />
    </div>
  )
}

export default Home
