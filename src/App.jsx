import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conditional from './Conditional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello react js</h1>
      <Conditional isDone={true} taks="html"></Conditional>
      <Conditional isDone={true} taks="css"></Conditional>
      <Conditional isDone={false} taks="javascrip"></Conditional>
    </>
  )
}

export default App
