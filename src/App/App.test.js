import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('should render without error', () => {
  const { container } = render(<App />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="App"
    >
      <header
        class="App-header"
      >
        <img
          alt="logo"
          class="App-logo"
          src="logo.svg"
        />
        <p>
          A simple react boilerplate without create-react-app
        </p>
      </header>
    </div>
  `)
})
