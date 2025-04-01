import React, { useEffect, useState, useRef, useMemo, useContext, use } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { useImmerReducer } from 'use-immer';

// Context API
import StateContext from '../Contexts/StateContext';

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
    Checkbox, 
    Icon,
    IconButton,
    CardActions,
} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({})

function AgencyDetail() {
    const classes = useStyles();
    const navigate = useNavigate();
    const GlobalState = useContext(StateContext);

    const params = useParams();

    const initialState = {
            userProfile: {
                agencyName: '',
                phoneNumber: '',
                profilePic: '',
                bio: '',
                sellerListings: [],
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
                    draft.userProfile.sellerListings = action.profileObject.seller_listings;
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
                const response = await Axios.get(`http://127.0.0.1:8000/api/profiles/${params.id}/`);
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
    <div>
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
                          
                              <span style={{color: 'green', 
                                          fontWeight: 'bolder'}}>
                                  {state.userProfile.agencyName}
                              </span>
                              </Typography>
                              </Grid>
                              <Grid item>
                              <Typography 
                              variant='h5' 
                              style={{textAlign: 'center', 
                                      margin: '1rem'}}>
                                        <IconButton>                              <LocalPhoneIcon /> {state.userProfile.phoneNumber}
                                        </IconButton> 
                              </Typography>
                              </Grid>
                          </Grid>
                          <Grid item style={{marginTop: '1rem', padding: '5px'}}>
                                {state.userProfile.bio}
                          </Grid>
                    </Grid>

                    <Grid 
                            container 
                            justifyContent="flex-start" 
                            spacing={2}
                            style={{padding: "10px"}}>
                        {(Array.isArray(state.userProfile.sellerListings) ? state.userProfile.sellerListings : []).map((listing) => {
                                return (
                                  <Grid 
                                    key={listing.id} 
                                    item style={{marginTop: "1rem", maxWidth: "20rem"}}
                                    >
                                        <Card>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={
                                                `http://127.0.0.1:8000/${listing.picture1}` 
                                                ? `http://127.0.0.1:8000/${listing.picture1}` 
                                                : defaultProfilePicture
                                            }
                                        title="Listing Picture"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {listing.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {listing.description.substring(0, 100)}...
                                        </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {listing.property_status === 'Sale'
                                            ? `${listing.listing_type}: $${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                                            : `${listing.listing_type}: $${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/${listing.rental_frequency}`}
                                        </CardActions>
                                        </Card>
                                  </Grid>
                        )
                            })}    
                        </Grid>
    </div>
  )
}

export default AgencyDetail
