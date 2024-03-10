import { useEffect, useState } from "react"

export default function UseEfectDetails(){
    const [name,setName]=useState('Sakib')
    useEffect(()=>{
        console.log("useEfet create")
    },[name])
    const changeNameHandler=()=>{
        const newName="Rohoman"
        setName(newName)
    }

    return(
        <div style={{border:"2px solid purpel"}}>
            <h2>useEfect Details Tutorials</h2>
            <h3>User Name: {name}</h3>
            <button onClick={changeNameHandler} style={{background:"purple", color:"white"}}>change Name</button>
        </div>
    )
}