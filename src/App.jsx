import { useState } from 'react'
import './App.css'
import Titled from './component/message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titled></Titled>
      
    </>
  )
}

export default App
