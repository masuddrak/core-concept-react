function Conditional({isDone,taks}){

    return (<>
        {/* <h2>{taks}:{isDone?"Finised":"larn more"}</h2> */}
        {/* <h2>{taks}:{isDone && "Finised"}</h2> */}
        <h2>{taks}:{isDone || "lare more"}</h2>
    </>)
}
export default Conditional