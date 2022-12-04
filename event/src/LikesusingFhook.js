import React, { useState } from 'react'

function LikesusingFhook(){
let [like,setlike] = useState(()=>0)

let  incrementlike = () =>
    {
    if(like<10)
    {
         setlike((Like)=>Like+1)
    }
}


let decrementlike= ()=>{
    if(like>0){
         setlike((Like)=>Like-1)
}
}

  return (
    <div>
        <p>Likes:</p>
        <button onClick={incrementlike}>like</button>
        <button onClick={decrementlike}>dislike</button>
    </div>
  )
}

export default LikesusingFhook