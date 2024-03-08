import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conditional from './Conditional'
import Singer from './Singer'


function App() {
  const [count, setCount] = useState(0)
  const singers=[
    {id:1,name:"salman",age:25},
    {id:2,name:"salman",age:20},
    {id:3,name:"salman",age:35},
    {id:4,name:"salman",age:45},
    {id:5,name:"salman",age:65},
  ]

  return (<>
      <h1>Hello React js</h1>
     {
      singers.map(singer=><Singer singer={singer}></Singer>)
     }
  </>)
}

export default App
