import React, { lazy } from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Navlinks from './Navlinks'

const Footer = lazy(() => import('./Footer'))

const Home = () => {
  return (
    <>
      <Navlinks />
      <div className="hero">
        <h1>For a better tomorrow, Clean Energy today</h1>
        <Link to="/sales-partner" className="link">
          Enroll
        </Link>
      </div>

      {/* info section */}
      <section className="first-white-info">
        <h1>
          Let Clean Energy America help you take full advantage
          <br /> of your local utility company’s solar program.
        </h1>
        <p>
          Help Cut Electricity Costs & Go Green (Nationwide): Our team of energy
          experts specialize in finding the right plan for your home or
          business. We have a variety of solar, wind and green energy programs
          to help you reach your goal of protecting the environment while saving
          money on your electric bill!
        </p>
        <iframe
          src="https://www.youtube.com/embed/7eADbCyZrXY"
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
        <h4>
          When you make the decision to install clean energy solutions in your
          home, you make a financially or environmentally sound investment.
        </h4>
        <h1>
          We can help you take advantage of your local utility company’s solar
          program, even if you’re a first-time buyer.
        </h1>
        <div>icon</div>
        <h6>
          You can save money. The sun delivers free, clean energy for your
          electric needs.
        </h6>
        <p>
          Solar is certainly an investment, but it’s one that pays off big in
          the long run. Learn about the various ways to obtain your own PV
          system, including great financing options, and how it will all affect
          your bottom line.
        </p>
        <div>icon</div>
        <h6>
          We know that figuring out how to power your home with renewable energy
          can feel like a puzzle. We’re here to make it easier.
        </h6>
        <p>
          We’re here to help you make sense of it all. We’ll explain how you can
          take advantage of all these benefits, and more, thereby lowering your
          energy bills and helping the environment!
        </p>
        <button>Lorem ipsum dolor sit amet.</button>
        <div>icon</div>
        <h6>
          Clean Energy America is here to make the transition into solar simple
          and easy. We want your experience to be a happy one.
        </h6>
        <p>
          We empower you to find renewable energy that is better for you and the
          planet.
        </p>
      </section>

      {/* another dark info section */}
      <section className="second-dark-info">
        <h1>We’re here to help you go green and save on your energy bills.</h1>
        <p>
          Think of that calculator in your junk drawer that you've always had
          and have no idea where you got it. That calculator is powered by a
          photovoltaic module (or in other words, a solar panel). <br />
          Granted, it's a tiny module powering a tiny calculator, but it works
          beautifully, right? I mean, this calculator has been running for
          decades. Multiply that tiny generator by a bazillion and you have
          enough solar power to run your entire house.
          <br /> Solar may seem a bit like science fiction, because chances are
          you don't know anyone who has a solar generator on their house yet.
          That's because the cost of solar panels has
          <br /> only recently come down to the point where it makes economic
          sense for most people.
          <br /> But solar panels have been powering specific applications for
          decades - mostly devices that are difficult to reach with power lines:
          Driveway gates, emergency signs, buoys,
          <br /> and virtually every satellite ever launched into space. The
          technology is extremely mature, not to mention reliable.
        </p>
        <div>icon</div>
        <div>number</div>
        <h4>Lorem, ipsum.</h4>
        <div>number</div>
        <h4>Lorem, ipsum dolor. </h4>
        <div>number</div>
        <h4>Lorem, ipsum.</h4>
      </section>

      {/* another white info section with images*/}
      <section className="third-white-info images">
        <h4>Lorem ipsum dolor sit.</h4>
        <h1>
          We make home energy efficiency simple, affordable, and worry-free.
        </h1>
        <p>
          Let Clean Energy America make it easier to go solar and save on your
          electricity bill.
        </p>
        <section className="images">
          <div className="image">images with text in the middle</div>
          <div className="image">images with text in the middle</div>
          <div className="image">images with text in the middle</div>
          <div className="image">images with text in the middle</div>
          <div className="image">images with text in the middle</div>
          <div className="image">images with text in the middle</div>
          <div className="image">images with text in the middle</div>
          <div className="image">images with text in the middle</div>
          <div>icons carousel</div>
        </section>
        <section className="banner">
          <h4>
            We support every step of the way by helping you find the cleanest
            forms of renewable energy and ways to produce it.
          </h4>
          <h1>Solar Energy. You Can Save</h1>
          <p>
            Clean energy works for everyone. And it is good for the economy, our
            communities and our environment.
          </p>
          <button>Lorem ipsum dolor sit amet consectetur.</button>
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
              <h4>- Juan</h4>
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
              <h4>- Eric</h4>
            </figcaption>
          </blockquote>
          <blockquote>
            <q>
              I called <em>CEA</em> and was able to get a quote within 24 hours.
              The representative was knowledgeable and gave me a few different
              payment options
              <br /> so I could pay for the project over time if needed. He was
              polite, professional and courteous. I would recommend <em>CEA</em>
              to friends and family.
            </q>
            <figcaption>
              <h4>- Tony</h4>
            </figcaption>
          </blockquote>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Finding affordable renewable energy shouldn’t be a guessing game.
            That’s why we created this free, fast, and easy tool to help anyone
            compare the costs of renewable energy in their area.
          </p>
          <button>Get Quote</button>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Home
