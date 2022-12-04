import React, { useState } from 'react'

function StateUsingfunction() {

    let [message,setMessage] = useState(()=>'print message')
    let [bal,setBal] = useState(1000)

    let Changetext = ()=>
    {
        setMessage("Hi ! welcome")
    }
    let changebal = ()=>
    {
        setBal((b)=>b + 2000)
    }

    let resettext = ()=>
    {
        setMessage(message)
        
    }
     

    
  return (
    <div>
        <p>{message}</p>
        <p>view:{bal}</p>
        <button onClick={Changetext}>change text</button>
        <button onClick={changebal}>change balance</button>
        <button onClick={resettext}>reset</button>
    
    </div>
  )
}

export default StateUsingfunction