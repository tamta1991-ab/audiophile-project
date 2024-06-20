import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data/data.json'

function App() {
  const [count, setCount] = useState(0)
console.log(data)
  return (
    <>
      hello data
    </>
  )
}

export default App
