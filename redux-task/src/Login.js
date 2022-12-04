import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { purple } from '@mui/material/colors';

function Login() {

  const paperStyle={padding:'50px 30px',margin:'50px auto', width:350}
  const headerStyle={margin:'5px', align:'center'}
  const avatarStyle={
      background:"purple"
  }

    const user = useSelector(state => state.User.value)

    const [Uname,setName] = useState()
    const[pass,setPass] = useState()

    let Changename =(e)=>
    {
      setName(e.target.value)
      
    }
    let ChangePassword =(e)=>
    {
      setPass(e.target.value)
    
    }

    
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Natwest Groups
          </Typography>
          <Button color="inherit" variant='outlined'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid >
        <Paper elevation={20} style={paperStyle}>
            <Grid style={headerStyle} align='center'>
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
            <Typography variant='caption'>Please Fill the SignIn Details</Typography></Grid>

            <form>
            <TextField
              margin="normal"
              required
              fullWidth
              id="UserName"
              label="UserName"
              name="UserName"
              type="text"
              autoComplete="current-username"
              autoFocus
              value={user.userName}
              onChange={Changename}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              autoFocus
              value={user.password}
              onChange={ChangePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained" 
              sx={{ mt: 3, mb: 2 ,backgroundColor:"purple"}}
            >
              Sign In
            </Button>
             </form>
            
            </Paper>
        </Grid>
       
    
        <p>UserName:{user.userName}</p>
        <p>Password:{user.password}</p>
    </>
  )
}

export default Login