import React from 'react'
import '../styles/solar-basics.css'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Navlinks from './Navlinks'

const SolarBasics = () => {
  return (
    <>
      <Navlinks />
      <motion.div
        className="basics"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        <header>
          <h1>Solar Basics</h1>
        </header>
        <div className="title">
          <h2>High Voltage DC</h2>
        </div>
        <div className="blocks">
          <section className="regular">
            <h3>Regular Inverters</h3>
            <p>Risk of very high temperature arcing and potentially fire.</p>
          </section>
          <section className="micro">
            <h3>Micro Inverters</h3>
            <p>
              Potential for fire to occur is greatly minimized. Inverters run a
              much minimal risk of overheating due to the fact that they work
              individually instead of putting pressure on only one inverter
            </p>
          </section>
        </div>
        <div className="title">
          <h2>Shading</h2>
        </div>
        <div className="blocks">
          <section className="regular">
            <h3>Regular Inverters</h3>
            <p>Shading one panel reduces efficiency of all panels</p>
          </section>
          <section className="micro">
            <h3>Micro Inverters</h3>
            <p>
              Outputs are completely independent of each other, which means more
              effective power. Inverters function individually with each panel
              vs the one inverter connected to all panels, this means if one
              panel is being covered with shade as shown above, then the
              production of all panels will be reduced with string inverters.
            </p>
          </section>
        </div>
        <div className="title">
          <h2>Maximum Power Point Tracking</h2>
        </div>
        <div className="blocks">
          <section className="regular">
            <h3>Regular Inverters</h3>
            <p>
              Targets one one power point for the whole panel array, reducing
              the overall amount of power harvested
            </p>
          </section>
          <section className="micro">
            <h3>Micro Inverters</h3>
            <p>
              Targets each panel's maximum power point. With micro inverters we
              can receive maximum production from each panel.
            </p>
          </section>
        </div>
        <div className="title">
          <h2>Monitoring And Fault Finding</h2>
        </div>
        <div className="blocks">
          <section className="regular">
            <h3>Regular Inverters</h3>
            <p>
              Only see the combined output from every solar panel in the series
              string, which makes troubleshooting mroe difficult.
            </p>
          </section>
          <section className="micro">
            <h3>Micro Inverters</h3>
            <p>
              Can monitor each solar panel individually allowing you to easily
              identify exactly what's happening more quickly and easily With
              micro inverters, we can keep track of all panels production
              individually, with string inverters we get total production.
            </p>
          </section>
        </div>
        <div className="title">
          <h2>Redundancy</h2>
        </div>
        <div className="blocks">
          <section className="regular">
            <h3>Regular Inverters</h3>
            <p>
              If your series string inverter develops a fault, your entire solar
              array stops producing power until it is fixed.
            </p>
          </section>
          <section className="micro">
            <h3>Micro Inverters</h3>
            <p>
              If a Micro Inverter develops a fault, the remaining Micro
              Inverters can continue to operate. If one micro inverter fails,
              the others will keep functioning normally. With string inverters,
              whole system will stop functioning until inverter is fixed if
              there are any issues.
            </p>
          </section>
        </div>
        <div className="title">
          <h2>Modularity</h2>
        </div>
        <div className="blocks">
          <section className="regular">
            <h3>Regular Inverters</h3>
            <p>
              Can only accept specific number of solar panels per inverter so
              it's not as easy to add more panels at a later date.
            </p>
          </section>
          <section className="micro">
            <h3>Micro Inverters</h3>
            <p>
              AC Solar Panels can be added to the Micro Inverter much more
              easily because they are independent of each other. With micro
              inverters you can keep adding panels if production increases
              without a problem. With string inverters it is more difficult to
              add panels as rewiring must be done.
            </p>
          </section>
        </div>
        <div className="title">
          <h2>Orientation</h2>
        </div>
        <div className="blocks">
          <section className="regular">
            <h3>Regular Inverters</h3>
            <p>
              All of your solar panels need to be connected in the same
              orientation so they all produce a similar current.
            </p>
          </section>
          <section className="micro">
            <h3>Micro Inverters</h3>
            <p>
              Can be oriented in any direction and will not affect the operation
              of other solar panels because they are independent from one
              another. With micro inverters, they can be placed in any direction
              allowing correct panel placement that allows for maximum
              production. With a string inverter, all panels must be placed the
              same way.
            </p>
          </section>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}
export default SolarBasics
