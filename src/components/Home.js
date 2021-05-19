import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
const Footer = lazy(() => import('./Footer'))

const Home = () => {
  return (
    <>
      <div className="homepage">
        <section className="hero">
          <h1>Clean Energy America</h1>
          <p>
            FOR A BETTER TOMORROW, <br /> CLEAN ENERGY TODAY.
          </p>
          <Link to="/sales-partner" className="link">
            <button>Join Cea!</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home
