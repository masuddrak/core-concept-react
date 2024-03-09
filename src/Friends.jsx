import { useEffect, useState } from "react"
import Friend from "./Friend"

function Friends({ friends }) {
    console.log(friends)
    return (<>
        <h3>All Friends:{friends.length}</h3>

        {
            friends.map(friend =><Friend friend={friend}></Friend>
            )
        }

    </>)
}
export default Friends