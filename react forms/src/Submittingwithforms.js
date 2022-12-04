import React, { useState } from 'react'

function Submittingwithforms() {
  let [deptid,setDeptId] = useState(0)
  let [deptName,setName] = useState('')
  let [Location,setLocation] = useState('')

  let updateID=(event) =>
  {
    setDeptId(event.target.value)

  }
  let updateName=(event) =>
  {
    setName(event.target.value)

  }
  let updateLocation=(event) =>
  {
    setLocation(event.target.value)

  }

  let submitted = (event)=>
  {
    alert(`${deptid},${deptName} ${Location}`)
  }


  return (
    <div>
      <form onSubmit={submitted}>
            <input type="number" name="dept id" value={deptid} placeholder ="Department id" onChange={updateID} />
            <input type="text" name="dept name" value={deptName} placeholder ="Department id" onChange={updateName} />
            <input type="text" name="dept location" value={Location} placeholder ="Department location" onChange={updateLocation} />
            <input type="submit" value="submit" />
            </form>      
    </div>
  )
}

export default Submittingwithforms