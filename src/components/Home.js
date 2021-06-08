import React, { lazy } from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Navlinks from './Navlinks'
import Button from './Button'
import { IoBusinessOutline } from 'react-icons/io5'
import { WiWindy } from 'react-icons/wi'
import { GrSolaris } from 'react-icons/gr'
import { motion } from 'framer-motion'

const CarouselImage = lazy(() => import('./Carousel.js'))
const Footer = lazy(() => import('./Footer'))

const Home = () => {
  return (
    <>
      <Navlinks />
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.6 }}
      >
        <h1>Our goal is to protect our environment for generations to come.</h1>
        <Link to="/sales-partner" className="link">
          <Button>
            <h4>See if you Qualify</h4>
          </Button>
        </Link>
      </motion.div>

      {/* info section */}
      <section className="first-white-info">
        <h1>
          Let Clean Energy America help you take full advantage
          <br /> of your local utility company’s solar program.
        </h1>
        <p>
          Help Cut Electricity Costs & Go Green (Nationwide): Our team of energy
          experts specialize in finding the right plan for your home or
          business. We have a variety of solar,and green energy programs to help
          you reach your goal of protecting the environment while saving money
          on your electric bill!
        </p>
        <iframe
          src="https://www.youtube-nocookie.com/embed/7eADbCyZrXY"
          title="Clean Energy America"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* dark info section */}
      <section className="first-dark-info">
        <h1>
          We make it easy to find the clean energy solution that’s right for
          your home.
        </h1>
        <p>
          In a nutshell, solar panels (photovoltaics) convert the energy of
          sunlight into electricity that you can use for pretty much anything.
          It's clean, it's cheap, and it's the way of the future. Get it.
        </p>
      </section>

      {/* white info section */}
      <section className="second-white-info">
        <h1>
          We can help you take advantage of your local utility company’s solar
          program, even if you’re a first-time buyer.
        </h1>
        <IoBusinessOutline size="5rem" className="icon" />
        <h2>
          You can save money. The sun delivers free, clean energy for your
          electric needs.
        </h2>
        <p>
          Solar is certainly an investment, but it’s one that pays off big in
          the long run. Learn about the various ways to obtain your own PV
          system, including great financing options, and how it will all benefit
          your bottom line.
        </p>
        <GrSolaris size="5rem" className="icon" />
        <h2>
          We know that figuring out how to power your home with renewable energy
          can feel like a puzzle. We’re here to make it easier.
        </h2>
        <p>
          We’re here to help you make sense of it all. We’ll explain how you can
          take advantage of all these benefits, and more, thereby lowering your
          energy bills and helping the environment!
        </p>
        <WiWindy size="5rem" className="icon" />

        <h2>
          Clean Energy America is here to make the transition into solar simple
          and easy. We want your experience to be a happy one.
        </h2>
        <p>
          We empower you to find renewable energy that is better for you and the
          planet.
        </p>
        <a href="https://clean-energy-america.estimate.demand-iq.com/">
          <Button>See If You Qualify</Button>
        </a>
      </section>

      {/* another dark info section */}
      <section className="second-dark-info">
        <h1>We’re here to help you go green and save on your energy bills.</h1>
        <h2>16</h2>
        <h2>States And Counting</h2>
        <h2>5+</h2>
        <h2>Years In Business </h2>
        <h2>30+</h2>
        <h2>Megawatts Installed</h2>
      </section>

      {/* another white info section with images*/}
      <section className="third-white-info images">
        <h1>
          We make home energy efficiency simple, affordable, and worry-free.
        </h1>
        <p>
          Let Clean Energy America make it easier to go solar and save on your
          electricity bill.
        </p>
        <section className="images">
          <CarouselImage />
        </section>
        <section className="banner">
          <h1>Solar Energy. You Can Save</h1>
          <p>
            Clean energy works for everyone. And it is good for the economy, our
            communities and our environment. We support every step of the way by
            helping you find the cleanest forms of renewable energy and ways to
            produce it.
          </p>
          <a href="https://clean-energy-america.estimate.demand-iq.com/">
            <Button>See If You Qualify</Button>
          </a>
        </section>
        <section className="testimonials">
          <h1>Testimonials</h1>

          <blockquote>
            <q>
              I couldn't believe that I could get a solar panel system installed
              for such a nominal fee. I am not well off, but I own my own home
              and was looking for other ways to cut my electric bill.
              <br /> <em> Clean Energy America</em> worked with me, explaining
              the process, no surprises, very transparent. They really care
              about their customers.
            </q>
            <figcaption>
              <h2>- Juan</h2>
            </figcaption>
          </blockquote>

          <blockquote>
            <q>
              I had a great experience working with
              <em> Clean Energy America</em>. Abraham Salazar was very
              knowledgeable and helped us navigate the process of deciding what
              system to buy.
              <br /> They were friendly and answered all our questions. We ended
              up going with a solar panel system and a water treatment system.
              He was always available to answer questions <br />
              along the way and made the installation process easy.
            </q>

            <figcaption>
              <h2>- Eric</h2>
            </figcaption>
          </blockquote>
          <blockquote>
            <q>
              I called <em>CEA</em> and was able to get a quote within 24 hours.
              The representative was knowledgeable and gave me a few different
              payment options
              <br /> so I could pay for the project over time if needed. He was
              polite, professional and courteous. I would recommend
              <em> CEA </em>
              to friends and family.
            </q>
            <figcaption>
              <h2>- Tony</h2>
            </figcaption>
          </blockquote>
        </section>
      </section>
      <div className="estimate">
        <h1>Apply today to see how it could work for you.</h1>

        <a href="https://clean-energy-america.estimate.demand-iq.com/">
          <Button>See If You Qualify</Button>
        </a>
      </div>
      <Footer />
    </>
  )
}

export default Home
