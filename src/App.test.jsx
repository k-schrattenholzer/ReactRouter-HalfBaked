/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

it('renders a welcome message when signed out', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  const gosh = screen.getByText('gosh')

  expect(gosh).toMatchSnapshot()
})