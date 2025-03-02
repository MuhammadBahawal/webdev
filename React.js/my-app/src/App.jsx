import { useState } from 'react'

import './App.css'
import Component from './Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello This is our first practise of rect</h1>
      <Component />
    </>
  )
}
export default App


