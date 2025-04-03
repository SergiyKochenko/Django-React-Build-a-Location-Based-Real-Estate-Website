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
    Breadcrumbs,
    Link,
} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import RoomIcon from '@mui/icons-material/Room';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    sliderContainer: {
        position: 'relative',
        marginTop: '1rem',
    },

    leftArrow: {
        position: 'absolute',
        cursor: 'pointer',
        fontSize: '3rem',
        color: 'white',
        top: '50%',
        left: '27.5%',
        "&:hover": {
            color: 'lightgray',
        }
    },
    rightArrow: {
        position: 'absolute',
        cursor: 'pointer',
        fontSize: '3rem',
        color: 'white',
        top: '50%',
        right: '27.5%',
        "&:hover": {
            color: 'lightgray',
        }
    }
})

function ListingDetail() {
    const classes = useStyles();
    const navigate = useNavigate();
    const GlobalState = useContext(StateContext);

    const params = useParams();

    const initialState = {
            dataIsLoading: true,
            listingInfo: "",
        };
    
        function ReducerFunction(draft, action) {
            switch (action.type) {
                case 'catchListingInfo':
                    draft.listingInfo = action.listingObject;
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
        async function GetListingInfo(){
            try{
                const response = await Axios.get(`http://127.0.0.1:8000/api/listings/${params.id}/`);
                console.log(response.data);
                dispatch({
                    type: 'catchListingInfo',
                    listingObject: response.data,
                });
                dispatch({
                    type: 'loadingDone',
                });
            }catch(e) {
                console.log(e.response);
            }
        }
        GetListingInfo();
    }, [])

    const listingPictures = [
        state.listingInfo.picture1,
        state.listingInfo.picture2,
        state.listingInfo.picture3,
        state.listingInfo.picture4,
        state.listingInfo.picture5,
    ].filter((picture) => picture !== null);

    const [currentPicture, setCurrentPicture] = useState(0);

    function NextPicture() {
        if (currentPicture === listingPictures.length - 1) {
            return setCurrentPicture(0);
        } else {
            setCurrentPicture(currentPicture + 1);
        }
        
    }

    function PreviousPicture() {
        if (currentPicture === 0) {
            return setCurrentPicture(listingPictures.length - 1);
        } else {
            setCurrentPicture(currentPicture - 1);
        }
    }

    const date = new Date(state.listingInfo.date_posted);
    const formattedDate = `Date posted: ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

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
    <div style={{ marginLeft: '2rem', marginRight: '2rem', marginBottom: '2rem'}}>
        <Grid item style={{ marginTop: '1rem'}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link 
                    underline="hover" 
                    color="inherit" 
                    onClick={() => navigate('/listings')}
                    sx={{ cursor: 'pointer' }}>
                    Listings
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{state.listingInfo.title}</Typography>
            </Breadcrumbs>
        </Grid>
        {/* Image slider */}
        {listingPictures.length > 0 ? (
            <Grid item container justifyContent='center' className={classes.sliderContainer}>
            {listingPictures.map((picture, index) => {
                return(
                    <div key={index}>
                        {index === currentPicture ? ( 
                            <img 
                                src={picture}
                                alt={`Listing ${index + 1}`}
                                style={{width: '45rem', height: '35rem'}} />
                                ) : ('')}
                    </div>
                )
            })}
            <ArrowCircleLeftIcon onClick={PreviousPicture} className={classes.leftArrow} />
            <ArrowCircleRightIcon onClick={NextPicture} className={classes.rightArrow} />
        </Grid>
        ) : ('')}

        {/* More information */}
        <Grid item container style={{ padding: '1rem', border: '1px solid black', marginTop: '1rem'}}>
            <Grid item container xs={7} direction='column' spacing={1}>
            <Grid item>
                <Typography variant='h5'>{state.listingInfo.title}</Typography>
            </Grid>
            <Grid item>
                <RoomIcon />{' '}
                <Typography variant='h6'>{state.listingInfo.borough}</Typography>
            </Grid>
            <Grid item>
                <Typography variant='subtitle1'>{formattedDate}</Typography>
            </Grid>
            <Grid item justifyContent="center" container xs={5} alignItems='center'>
                <Typography 
                    variant='h6'
                    style={{ fontWeight: 'bolder', color: 'green' }}>
                    {state.listingInfo.listing_type} | {' '} 
                    {state.listingInfo.property_status === 'Sale' 
                        ? `$${state.listingInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` 
                        : `$${state.listingInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / ${state.listingInfo.rental_frequency}`}
                </Typography>
            </Grid>
        </Grid>
        </Grid>

        <Grid item container justifyContent='flex-start' 
            style={{ padding: '1rem', border: '1px solid black', marginTop: '1rem'}}
            >
            {state.listingInfo.rooms ? (
                <Grid item xs={2} style={{display:'flex'}}>
                <Typography variant='h6'>{state.listingInfo.rooms} Rooms</Typography>
                </Grid>
            ) : ('')}

            {state.listingInfo.furnished ? (
                <Grid item xs={2} style={{display:'flex'}}>
                    <CheckBoxIcon style={{color: 'green', fontSize: '2rem'}} />{' '}<Typography variant='h6'>Furnished</Typography>
                </Grid>
            ) : ('')}

            {state.listingInfo.pool ? (
                <Grid item xs={2} style={{display:'flex'}}>
                    <CheckBoxIcon style={{color: 'green', fontSize: '2rem'}} />{' '}<Typography variant='h6'>Pool</Typography>
                </Grid>
            ) : ('')}

            {state.listingInfo.elevator ? (
                <Grid item xs={2} style={{display:'flex'}}>
                    <CheckBoxIcon style={{color: 'green', fontSize: '2rem'}} />{' '}<Typography variant='h6'>Elevator</Typography>
                </Grid>
            ) : ('')}

            {state.listingInfo.cctv ? (
                <Grid item xs={2} style={{display:'flex'}}>
                    <CheckBoxIcon style={{color: 'green', fontSize: '2rem'}} />{' '}<Typography variant='h6'>CCTV</Typography>
                </Grid>
            ) : ('')}

            {state.listingInfo.parking ? (
                <Grid item xs={2} style={{display:'flex'}}>
                    <CheckBoxIcon style={{color: 'green', fontSize: '2rem'}} />{' '}<Typography variant='h6'>Parking</Typography>
                </Grid>
            ) : ('')}
        </Grid>

        {/* Description */}
        {state.listingInfo.description ? (
        <Grid item style={{ padding: '1rem', border: '1px solid black', marginTop: '1rem'}} >
            <Typography variant='h5'>Description</Typography>
            <Typography variant='h6'>{state.listingInfo.description}</Typography>
        </Grid>
        ) : ('')}
    </div>
)
}

export default ListingDetail
