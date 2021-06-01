import React from 'react'
import '../styles/button.css'
import { motion } from 'framer-motion'

const Button = () => {
  return (
    <div>
      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        See If You Qualify
      </motion.button>
    </div>
  )
}
export default Button
