import React, { Component } from 'react'
import Login from './Login'
import Logout from './Logout'

export class LoginParentControl extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedin : false
  }
}

    handleLogin=() =>
        {
            this.setState = true
        }

    handleLogout=() =>
        {
            this.setState = false
        }

render() {
    let isloggedin = this.state.isLoggedin

    let button

    if (isloggedin) {

        button = <Logout clickFunction = {this.handleLogout} />
       
    }
    else
   
        button = <Login clickFunction = {this.handleLogin} />



    return (
      <div>
         <Greeting isLoggedIn={isloggedIn} />
        {button}
      </div>
    )
  }
}

export default LoginParentControl