import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Material UI
import { Button, Typography, Grid, AppBar, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';

// Contexts
import StateContext from '../Contexts/StateContext';

// Components
import CustomCard from './CustomCard';

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
},

})

function Header() {
    const classes = useStyles();
    const navigate = useNavigate();
    const GlobalState = useContext(StateContext);
  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <div className={classes.leftNav}>
            <Button color="inherit" onClick={() => navigate('/')}><Typography variant='h4'>LBREP</Typography></Button>
          </div>
          <div>
          <Button color="inherit" onClick={() => navigate('/listings')} style={{marginRight: '2rem'}}><Typography variant='h6'>Listings</Typography></Button>
          <Button color="inherit" style={{marginLeft: '2rem'}}><Typography variant='h6'>Agencies</Typography></Button>
          </div>
          <div className={classes.rightNav}>
            <Button className={classes.propertyBtn}>Add Property</Button>
            
            {GlobalState.userIsLogged ? ( 
              <Button 
              className={classes.loginBtn} 
              // onClick={() => navigate('/login')}
              >
                {GlobalState.userUsername}
                </Button> 
          ) : ( 
            <Button 
            className={classes.loginBtn} 
            onClick={() => navigate('/login')}
            >
              Login
            </Button> 
          )}
            
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default Header
