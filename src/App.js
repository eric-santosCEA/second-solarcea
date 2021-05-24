import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/app.css'

const Home = lazy(() => import('./components/Home'))
const SolarBasics = lazy(() => import('./components/SolarBasics'))
const SalesPartner = lazy(() => import('./components/SalesPartner'))
const Work = lazy(() => import('./components/OurWork'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/solar-basics" component={SolarBasics} />
            <Route exact path="/sales-partner" component={SalesPartner} />
            <Route exact path="/work" component={Work} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
