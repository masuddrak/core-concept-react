import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello react js</h1>
      <Heading></Heading>
      <GetDisplay name="Samsung" price="222"></GetDisplay>
      <GetDisplay name="Symphone" price="24522"></GetDisplay>
      <GetDisplay name="HTC" price="222"></GetDisplay>
    </>
  )
}
function Heading() {
  const headingStyle = {
    padding: "24px",
    margin: "24px",
    backgroundColor: "green",
    color: "white"
  }
  return (<>
    <h1 style={headingStyle}>Hi My Name is Masud Rana Learne by React Js</h1>

  </>)
}
function GetDisplay(propos) {
  console.log(propos)
  return (<>
  
    <p>Brand:{propos.name} Price:{propos.price}</p>
  </>)
}

export default App
