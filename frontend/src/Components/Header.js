import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

// Material UI
import { Button, Typography, Grid, AppBar, Toolbar, Menu, MenuItem, Snackbar } from '@mui/material'
import { makeStyles } from '@mui/styles';

// Contexts
import StateContext from '../Contexts/StateContext';
import DispatchContext from '../Contexts/DispatchContext';

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

profileBtn: {
  color: 'black',
  width: '15rem',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'green',
  },
},
logoutBtn: {
  color: 'black',
  width: '15rem',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'red',

},
},
})

function Header() {
    const classes = useStyles();
    const navigate = useNavigate();
    const GlobalState = useContext(StateContext);
    const GlobalDispatch = useContext(DispatchContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    function HandleProfile() {
      setAnchorEl(null);
      navigate('/profile');
    }

    const [openSnack, setOpenSnack] = useState(false);

  async function HandleLogout() {
    setAnchorEl(null);
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      try {
      const response = await Axios.post(
        'http://127.0.0.1:8000/api-auth-djoser/token/logout/', 
        GlobalState.userToken, 
        { headers: {Authorization: 'Token '.concat(GlobalState.userToken)}}
    );
    console.log(response);
    GlobalDispatch({type: 'logout'});
    setOpenSnack(true);
    } catch (e) {
      console.log(e.response);
    }
    }
  }

  useEffect(() => {
      if (openSnack) {
          setTimeout(() => {
              navigate(0);
          }, 1500);
      }
  }, [openSnack, navigate]);

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <div className={classes.leftNav}>
            <Button color="inherit" onClick={() => navigate('/')}><Typography variant='h4'>LBREP</Typography></Button>
          </div>
          <div>
          <Button color="inherit" onClick={() => navigate('/listings')} style={{marginRight: '2rem'}}><Typography variant='h6'>Listings</Typography></Button>
          <Button color="inherit" style={{marginLeft: '2rem'}} onClick={() => navigate('/agencies')}><Typography variant='h6'>Agencies</Typography></Button>
          </div>
          <div className={classes.rightNav}>
            <Button onClick={() => navigate('/addproperty')} className={classes.propertyBtn}>Add Property</Button>

            {GlobalState.userIsLogged ? ( 
              <Button 
              className={classes.loginBtn} 
              onClick={handleClick}
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
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className={classes.profileBtn} onClick={HandleProfile}>Profile</MenuItem>
        <MenuItem className={classes.logoutBtn} onClick={HandleLogout}>Logout</MenuItem>
      </Menu>

                      <Snackbar
                          open={openSnack}
                          message="You have successfully logged out"
                          anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                          }}
                      />
            
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default Header
