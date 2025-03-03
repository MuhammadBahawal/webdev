import { useState } from 'react'

import './App.css'
import Component from './Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello This is our first practise of React</h1>
      <Component></Component>
    </>
  )
}
export default App


