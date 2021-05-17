import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Clean Energy America</h1>
        <h4>
          FOR A BETTER TOMORROW, <br /> CLEAN ENERGY TODAY.
        </h4>
        <Link to="/sales-partner">
          <button>Join CEA!</button>
        </Link>
      </section>
    </div>
  )
}

export default Home
