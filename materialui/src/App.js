import logo from './logo.svg';
import './App.css';
import { Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SignIn from './Sign';
import { Box } from '@mui/system';
import { purple } from '@mui/material/colors';
import Signup from './Signup';
import { VisaCreditCard as VisaCard } from 'react-fancy-visa-card';
import React, {Component} from "react";


class App extends Component {

  pay = (e, data) => {
      console.log(data);

  };

  

  render() {
      return (
          <div className="App">
          
          <VisaCard onSubmit={this.pay} 
 
 frontCardColor="Purple"
 backCardColor="black"
 submitBtnColor="black"
 submitBtnTxt="Pay $350"
 
 
 />


          </div>
      );
  }
}

export default App;


