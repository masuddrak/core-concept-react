
 
function Conditional({ isDone, taks }) {

    return (<>
        {/* <h2>{taks}:{isDone?"Finised":"larn more"}</h2> */}
        {/* <h2>{taks}:{isDone && "Finised"}</h2> */}
        <div className="conditiomnal_vontainer">
            <h2>{taks}:{isDone || "lare more"}</h2>
        </div>
    </>)
}
export default Conditional