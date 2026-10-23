import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div>
      <Homepage />
      <Analytics />
    </div>
  )
}

export default App