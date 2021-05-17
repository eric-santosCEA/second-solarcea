import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./components/Home'))
const Navbar = lazy(() => import('./components/Navbar'))
const SolarBasics = lazy(() => import('./components/SolarBasics'))
const SalesPartner = lazy(() => import('./components/SalesPartner'))
const Footer = lazy(() => import('./components/Footer'))

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
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </>
  )
}

export default App
