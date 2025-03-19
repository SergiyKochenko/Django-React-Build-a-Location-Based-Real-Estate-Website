import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Grid, AppBar, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';

import CustomCard from './CustomCard';
import CssBaseline from '@mui/material/CssBaseline';

const useStyles = makeStyles({
  leftNav: {
    marginRight: 'auto',

  },
  rightNav: {
    marginLeft: 'auto',
    marginRight: '10rem'

  },
propertyBtn: {
  background: 'green',
  color: 'white',
  width: '15rem',
  fontSize: '1.1rem',
  marginRight: '1rem',
  '&:hover': {
    backgroundColor: 'blue',
  },
},
loginBtn: {
  background: 'white',
  color: 'black',
  width: '15rem',
  fontSize: '1.1rem',
  marginLeft: '1rem',
  '&:hover': {
    backgroundColor: 'green',
},
}
 
})

function Home () {
  const [btnColor, setBtnColor] = useState('error');
  const classes = useStyles();
  return (
    <>
    <CssBaseline />
     <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <div className={classes.leftNav}>
            <Button color="inherit"><Typography variant='h4'>LBREP</Typography></Button>
          </div>
          <div>
          <Button color="inherit" style={{marginRight: '2rem'}}><Typography variant='h6'>Listings</Typography></Button>
          <Button color="inherit" style={{marginLeft: '2rem'}}><Typography variant='h6'>Agencies</Typography></Button>
          </div>
          <div className={classes.rightNav}>
            <Button className={classes.propertyBtn}>Add Property</Button>
            <Button className={classes.loginBtn}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Home
