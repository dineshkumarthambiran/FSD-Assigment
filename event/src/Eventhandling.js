import React from 'react'

function Eventhandling() {

    function showAlert(){
        alert("button clicked")
    }
  return (
    <div>
        <button onClick={showAlert}>click Me</button>
    </div>
  )
}

export default Eventhandling