import React, { useEffect, useState, useRef, useMemo, useContext, use } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useImmerReducer } from 'use-immer';

// Context API
import StateContext from '../Contexts/StateContext';

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
            },
            agencyNameValue: '',
            phoneNumberValue: '',
            bioValue: '',
            pictureValue: [],
            profilePictureValue: '',
        };
    
        function ReducerFunction(draft, action) {
            switch (action.type) {
                case 'catchUserProfileInfo':
                    draft.userProfile.agencyName = action.profileObject.agency_name;
                    draft.userProfile.phoneNumber = action.profileObject.phone_number;
                    break;
                case 'catchAgencyNameChange':
                    draft.agencyNameValue = action.agencyNameChosen;
                    break;
                case 'catchPhoneNumberChange':
                    draft.phoneNumberValue = action.phoneNumberChosen;
                    break;
                case 'catchBioChange':
                    draft.bioValue = action.bioChosen;
                    break;
                case 'catchUploadedPicture':
                    draft.pictureValue = action.pictureChosen;
                    break;
                case 'catchProfilePictureChange':
                    draft.profilePictureValue = action.profilePictureChosen;
                    break;                
                default:
                    break;
            }
        }
    
        const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

        useEffect(() => {
            if (state.pictureValue && state.pictureValue[0]) {
                dispatch({
                    type: 'catchProfilePictureChange',
                    profilePictureChosen: state.pictureValue[0],
                });
            }
        }, [state.pictureValue]);

        useEffect(() => {
        async function GetProfileInfo(){
            try{
                const response = await Axios.get(`http://127.0.0.1:8000/api/profiles/${GlobalState.userId}/`);
                console.log(response.data);
                dispatch({
                    type: 'catchUserProfileInfo',
                    profileObject: response.data,
                });
            }catch(e) {
                console.log(e.response);
            }
        }
        GetProfileInfo();
    }, [])

  return (
    <>
    <div>
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
    </div>

      <div className={classes.formContainer}>
                  <form>
                      <Grid item container justifyContent={'center'}>
                          <Typography variant='h4'>MY PROFILE</Typography>
                      </Grid>
      
                  <Grid item container style={{marginTop: '1rem'}}>
                      <TextField 
                          id="agencyName" 
                          label="Agency Name*" 
                          variant='outlined' 
                          fullWidth
                          value={state.agencyNameValue}
                          onChange = {(e) => 
                              dispatch({
                                    type: 'catchAgencyNameChange', 
                                    agencyNameChosen: e.target.value,
                              })
                          }
                           />
                  </Grid>
                  <Grid item container style={{marginTop: '1rem'}}>
                      <TextField 
                          id='phoneNumber' 
                          label='Phone Number*' 
                          variant='outlined' 
                          fullWidth
                          value={state.phoneNumberValue}
                          onChange = {(e) => 
                              dispatch({
                                    type: 'catchPhoneNumberChange', 
                                    phoneNumberChosen: e.target.value,
                              })
                          }
                           />
                  </Grid>
                  <Grid item container style={{marginTop: '1rem'}}>
                      <TextField 
                          id= 'bio' 
                          label= 'Bio' 
                          variant='outlined'
                          multiline
                          rows={6}
                          fullWidth
                          value={state.bioValue}
                          onChange = {(e) => 
                              dispatch({
                                    type: 'catchBioChange', 
                                    bioChosen: e.target.value,
                              })
                          }
                           />
                  </Grid>

                  <Grid
                                      item
                                      container
                                      xs={6}
                                      style={{ marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto' }}
                                  >
                                      <Button
                                          variant='contained'
                                          component='label'
                                          fullWidth
                                          className={classes.picturesBtn}
                                      >
                                          PROFILE PICTURE
                                          <input 
                                          type='file' 
                                          accept='image/png, image/gif, image/jpeg' 
                                          hidden
                                          onChange={(e) => 
                                              dispatch({
                                                  type: 'catchUploadedPicture',
                                                  pictureChosen: e.target.files,
                                              })
                                          }
                                          />
                                      </Button>
                                  </Grid>

                                  <Grid item container>
                                                      <ul>
                                                      {state.profilePictureValue ? (<li>{state.profilePictureValue.name}</li>):("")}
                                                      </ul>
                                                  </Grid>

                  <Grid 
                      item 
                      container
                      xs={8} 
                      style={{marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto'}}>
                      <Button 
                          variant='contained' 
                          color='primary' 
                          fullWidth
                          type='submit'
                          className={classes.loginBtn}>
                            UPDATE PROFILE
                          </Button>
                  </Grid>
                  
                  </form>
              </div>
    </>
  )
}

export default Profile
