import React from 'react'
import { act, render, cleanup } from '@testing-library/react'
import Button from '../Button'

afterEach(cleanup)

it('renders <Button/> component', () => {
  render(<Button />)
})
