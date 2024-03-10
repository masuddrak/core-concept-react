function Friend({ friend }) {
    const { name, email } = friend
    // console.log(friend)
    return (<>
        <div style={{border:"2px solid green",margin:"10px"}}>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
        </div>
    </>)
}
export default Friend