import React, { useEffect, useState, useRef, useMemo, useContext, use } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useImmerReducer } from 'use-immer';

// Context API
import StateContext from '../Contexts/StateContext';

// Components
import ProfileUpdate from './ProfileUpdate';

// Assets
import defaultProfilePicture from './Assets/defaultProfilePicture.jpg';

// Material UI
import { 
    Grid, 
    AppBar, 
    Typography, 
    Button, 
    Card, 
    CardHeader, 
    CardMedia, 
    CardContent, 
    CircularProgress, 
    TextField, 
    FormControlLabel, 
    Checkbox 
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    formContainer: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3rem',
        border: '5px solid black',
        padding: '3rem',
    },
    loginBtn: {
        background: 'green',
        color: 'white',
        fontSize: '1.1rem',
        marginLeft: '1rem',
        '&:hover': {
        backgroundColor: 'blue',
    },
    },
    picturesBtn: {
        background: 'blue',
        color: 'white',
        fontSize: '0.8rem',
        border: '1px solid black',
        marginLeft: '1rem',
    },
})

function Profile() {
    const classes = useStyles();
    const navigate = useNavigate();
    const GlobalState = useContext(StateContext);

    const initialState = {
            userProfile: {
                agencyName: '',
                phoneNumber: '',
                profilePic: '',
                bio: '',
            },
            dataIsLoading: true,
        };
    
        function ReducerFunction(draft, action) {
            switch (action.type) {
                case 'catchUserProfileInfo':
                    draft.userProfile.agencyName = action.profileObject.agency_name;
                    draft.userProfile.phoneNumber = action.profileObject.phone_number;
                    draft.userProfile.profilePic = action.profileObject.profile_picture;
                    draft.userProfile.bio = action.profileObject.bio;
                    break;
                case 'loadingDone':
                    draft.dataIsLoading = false;
                    break;          
                default:
                    break;
            }
        }
    
        const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

        useEffect(() => {
        async function GetProfileInfo(){
            try{
                const response = await Axios.get(`http://127.0.0.1:8000/api/profiles/${GlobalState.userId}/`);
                console.log(response.data);
                dispatch({
                    type: 'catchUserProfileInfo',
                    profileObject: response.data,
                });
                dispatch({
                    type: 'loadingDone',
                });
            }catch(e) {
                console.log(e.response);
            }
        }
        GetProfileInfo();
    }, [])

    function WelcomeDisplay() {
        if (state.userProfile.agencyName === null || state.userProfile.agencyName === '' || state.userProfile.phoneNumber === null || state.userProfile.phoneNumber === '') {
            return (
                <Typography 
                variant='h5' 
                style={{textAlign: 'center', 
                        margin: '1rem'}}>
                    
                Welcome {" "} 
                <span style={{color: 'green', 
                    fontWeight: 'bolder'}}>
                    {GlobalState.userUsername}
                </span>{""}
                , please submit this form below to update your profile
                </Typography>
            )
        }
        else {
            return (
                <Grid 
                container
                style={{ width: '50%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '1rem',
                        border: '5px solid black',
                        padding: '5px',
                        }}>
                    <Grid item xs={6}>
                        <img 
                            style={{height: '10rem', width: '15rem'}} 
                            src={
                                state.userProfile.profilePic !== null
                                ? state.userProfile.profilePic
                                : defaultProfilePicture
                            } 
                            alt="Profile of the user" />
                    </Grid>
                    <Grid 
                        item 
                        container 
                        direction= 'column' 
                        justifyContent= 'center' 
                        xs={6}
                        >
                        <Grid item>
                        <Typography 
                        variant='h5' 
                        style={{textAlign: 'center', 
                                margin: '1rem'}}>
                    
                        Welcome {" "} 
                        <span style={{color: 'green', 
                                    fontWeight: 'bolder'}}>
                            {GlobalState.userUsername}
                        </span>
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography 
                        variant='h5' 
                        style={{textAlign: 'center', 
                                margin: '1rem'}}>
                    
                        You have x properties listed
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            )
        }
        }

  if (state.dataIsLoading === true) {
    return (
      <Grid 
        container    
        justifyContent='center' 
        alignItems='center' 
        style={{ height: '100vh' }}
        >
          <CircularProgress />
      </Grid>)
  }
  return (
    <>
    <div>
      {WelcomeDisplay()}
    </div>

      <ProfileUpdate userProfile={state.userProfile} />
    </>
  )
}

export default Profile
