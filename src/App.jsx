import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conditional from './Conditional'
import Singer from './Singer'
import Counter from './Counter'
import Friends from './Friends'
import { useEffect } from 'react'
import UseEfectDetails from './UseEfectDetails'


function App() {
  const [count, setCount] = useState(0)
  const  [friends,setFriends]=useState([])
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setFriends(data))
  },[])

  const singers=[
    {id:1,name:"salman",age:25},
    {id:2,name:"salman",age:20},
    {id:3,name:"salman",age:35},
    {id:4,name:"salman",age:45},
    {id:5,name:"salman",age:65},
  ]
const handelar1=()=>{
  alert("hello")
}
const handelar2=(num)=>{
  alert(num+5)
}
  return (<>
      <h1>Hello React js</h1>
      <UseEfectDetails></UseEfectDetails>
    <Friends friends={friends}></Friends>
      <Counter></Counter>
      <button onClick={handelar1} style={{backgroundColor:"green",color:"white"}}>hello</button>
      <button onClick={()=>handelar2(10)} style={{backgroundColor:"green",color:"white"}}>hello</button>
     {
      singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
     }
  </>)
}

export default App
