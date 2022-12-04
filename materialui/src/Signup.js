import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';

export default function Signup() {

    const paperStyle={padding:'50px 30px',margin:'50px auto', width:450}
    const headerStyle={margin:'5px', align:'center'}
    const avatarStyle={
        background:"purple"
    }
  return (
   
    <Grid >
        <Paper elevation={20} style={paperStyle}>
            <Grid style={headerStyle} align='center'>
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign Up</h2>
            <Typography variant='caption'>Please Fill the Signup Details</Typography></Grid>

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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Number"
              label="Number"
              type="Number"
              id="Number"
              autoComplete="Number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControl>
            <RadioGroup>
                <FormControlLabel value="Male" label="Male"></FormControlLabel>
            </RadioGroup></FormControl> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </form>
            
        </Paper>
    </Grid>
   
    
  );
}