import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./components/Home'))
const Navbar = lazy(() => import('./components/Navbar'))
const SolarBasics = lazy(() => import('./components/SolarBasics'))
const SalesPartner = lazy(() => import('./components/SalesPartner'))
const Footer = lazy(() => import('./components/Footer'))
const Work = lazy(() => import('./components/OurWork'))
const Contact = lazy(() => import('./components/Contact'))
const Hiring = lazy(() => import('./components/Hiring'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/solar-basics" component={SolarBasics} />
            <Route exact path="/sales-partner" component={SalesPartner} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/hiring" component={Hiring} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </>
  )
}

export default App
