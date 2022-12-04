import React, { useState } from 'react'

function Userinputdisplay() {
    const [name,setName] = useState('')
    const [message,setMsg]= useState('')

    const [updateName,setUpdname] = useState('')
    const [UpdateMessage,setUpdMsg]= useState('')


    let changeName = (event) =>
            {
                setName(event.target.value)
            }
    let changeMessage = (event) =>
            {
                setMsg(event.target.value)
            }           
    let updatedMessage = () =>
            {
                setUpdname(name)
                setUpdMsg(message)
            }

          

    

      return (
    <div>
        {updateName}<br/>
        {UpdateMessage}<br/>
        <input type = "text" placeholder='Enter your name' onChange={changeName}></input><br/>
        
        <input type = "text" placeholder='Enter Content' onChange={changeMessage}></input><br/>
        
        <button onClick={updatedMessage}>update</button>
    </div>
  )
}

export default Userinputdisplay