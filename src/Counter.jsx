import { useEffect, useState } from "react"

function Counter() {
    const [count, Setcount] = useState(0)
    const  [friends,setFriends]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])

    const addHander = () => {
        const newCount = count + 1
        Setcount(newCount)
    }
    const reduceHander = () => {
        const newCount = count - 1
        if (newCount >= 0) {
            Setcount(newCount)
        }

    }
    return (<>
        <div style={{ border: "2px solid green", margin: "10px" }}>
            <h3>counter:{count}</h3>
            <button onClick={addHander}>Add</button>
            <button onClick={reduceHander}>Reduce</button>
        </div>

    </>)
}
export default Counter