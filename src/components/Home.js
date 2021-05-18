import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className="homepage">
        <section className="hero">
          <h1>Clean Energy America</h1>
          <p>
            FOR A BETTER TOMORROW, <br /> CLEAN ENERGY TODAY.
          </p>
          <Link to="/sales-partner">
            <button>Join CEA!</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home
