import React from 'react'
import Guestgreeting from './Guestgreeting'
import UserGreeting from './UserGreeting'

function Greetings(props) {

        let isLoggedIn = props.isLoggedIn
        if (isLoggedIn) {

            return <UserGreeting />
            
        } else {
            
            return <Guestgreeting />
        }
  
}

export default Greetings