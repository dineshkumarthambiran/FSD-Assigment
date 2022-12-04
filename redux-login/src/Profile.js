import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {

    const user = useSelector(state => state.user.value)

  return (
    <div>
        <p>userName:{user.name}</p>
        <p>Age:{user.Age}</p>
        <p>Company:{user.Company}</p>
    </div>
  )
}

export default Profile
