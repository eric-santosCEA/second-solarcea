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
        <h3>Lorem ipsum dolor sit.</h3>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas
          cupiditate in fuga voluptas suscipit quam deleniti! Suscipit
          veritatis, aliquam atque nihil aut inventore.
          <br /> Optio aliquid quasi architecto velit necessitatibus natus
          quibusdam nemo, ullam, quae tempore vel hic ex dolorem culpa earum
          doloribus molestiae placeat quis quam totam <br />
          libero eligendi! Tempora, iusto hic, et consequuntur ullam enim
          quibusdam, exercitationem ab quaerat rerum sunt est fugiat architecto
          eligendi. Illum quos autem sit,
          <br /> iure voluptatem ab, cupiditate, repudiandae aliquam hic totam
          molestias harum neque nobis quaerat quo maiores? Delectus adipisci
          asperiores ipsa,
          <br /> rem doloremque porro expedita laudantium tenetur facere nemo
          ipsam tempora.
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
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vel
          accusamus dicta sit repellat numquam, cupiditate consequuntur tempore,
          cumque neque quam voluptas id.
          <br /> Assumenda, vitae obcaecati alias, non error nemo dolorem quos
          accusamus incidunt officia porro ratione necessitatibus quia
          doloribus.
        </p>
      </section>

      {/* white info section */}
      <section className="second-white-info">
        <h4>Lorem ipsum dolor sit.</h4>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <div>icon</div>
        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          provident voluptatibus perspiciatis.
        </p>
        <div>icon</div>
        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          provident voluptatibus perspiciatis.
        </p>
        <button>Lorem ipsum dolor sit amet.</button>
        <div>icon</div>
        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          provident voluptatibus perspiciatis.
        </p>
      </section>

      {/* another dark info section */}
      <section className="second-dark-info">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perspiciatis, repudiandae iure impedit molestias ipsam consequuntur
          perferendis iste ratione delectus <br /> placeat laudantium odit
          consequatur molestiae, veritatis eius dolor aut! Excepturi
          necessitatibus dignissimos porro perspiciatis fugit. Ipsum neque animi
          maiores necessitatibus.
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
        <h1>Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A cupiditate
          laborum nihil voluptatem hic alias.
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
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            est quis qui vitae minima sapiente dicta quisquam saepe error?
            Nostrum.
          </p>
          <button>Lorem ipsum dolor sit amet consectetur.</button>
        </section>
        <section className="steps">
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          <h1>Lorem ipsum dolor sit.</h1>
          <div>icon </div>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus excepturi sit quisquam aperiam nisi. Eaque eum maiores
            quo eligendi tenetur.
          </p>
          <div>icon </div>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus excepturi sit quisquam aperiam nisi. Eaque eum maiores
            quo eligendi tenetur.
          </p>
          <div>icon </div>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus excepturi sit quisquam aperiam nisi. Eaque eum maiores
            quo eligendi tenetur.
          </p>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            molestiae itaque omnis sunt nam nisi enim odio veniam. Magnam
            distinctio, dolores excepturi mollitia fugiat perspiciatis optio
            nesciunt totam dolor quae?
          </p>
          <button>Get Quote</button>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Home
