import React, { act, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useImmerReducer } from 'use-immer'

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
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    formContainer: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3rem',
        border: '5px solid black',
        padding: '3rem',
    },
    registerBtn: {
        background: 'green',
        color: 'white',
        fontSize: '1.1rem',
        marginLeft: '1rem',
        '&:hover': {
        backgroundColor: 'blue',
    },
    },
})

function AddProperty() {
    const classes = useStyles()
    const navigate = useNavigate()

    const initialState = {
            titleValue: '',
            listingTypeValue: '',
            descriptionValue: '',
            areaValue: '',
            boroughValue: '',
            propertyStatusValue: '',
            latitudeValue: '',
            longitudeValue: '',
            priceValue: '',
            rentalFrequencyValue: '',
            roomsValue: '',
            furnishedValue: false,
            poolValue: false,
            elevatorValue: false,
            cctvValue: false,
            parkingValue: false,
            picture1Value: '',
            picture2Value: '',
            picture3Value: '',
            picture4Value: '',
            picture5Value: '',
        }
        
        function ReducerFunction(draft, action) {
            switch (action.type) {
                case 'catchTitleChange':
                    draft.titleValue = action.titleChosen;
                    break
                case 'catchListingTypeChange':
                    draft.listingTypeValue = action.listingTypeChosen;
                    break
                case 'catchDescriptionChange':
                    draft.descriptionValue = action.descriptionChosen;
                    break
                case 'catchAreaChange':
                    draft.areaValue = action.areaChosen;
                    break
                case 'catchBoroughChange':
                    draft.boroughValue = action.boroughChosen;
                    break
                case 'catchPropertyStatusChange':
                    draft.propertyStatusValue = action.propertyStatusChosen;
                    break
                case 'catchLatitudeChange':
                    draft.latitudeValue = action.latitudeChosen;
                    break
                case 'catchLongitudeChange':
                    draft.longitudeValue = action.longitudeChosen;
                    break
                case 'catchPriceChange':
                    draft.priceValue = action.priceChosen;
                    break
                case 'catchRentalFrequencyChange':
                    draft.rentalFrequencyValue = action.rentalFrequencyChosen;
                    break
                case 'catchRoomsChange':
                    draft.roomsValue = action.roomsChosen;
                    break
                case 'catchFurnishedChange':
                    draft.furnishedValue = action.furnishedChosen;
                    break
                case 'catchPoolChange':
                    draft.poolValue = action.poolChosen;
                    break
                case 'catchElevatorChange':
                    draft.elevatorValue = action.elevatorChosen;
                    break
                case 'catchCCTVChange':
                    draft.cctvValue = action.cctvChosen;
                    break
                case 'catchParkingChange':
                    draft.parkingValue = action.parkingChosen;
                    break
                case 'catchPicture1Change':
                    draft.picture1Value = action.picture1Chosen;
                    break
                case 'catchPicture2Change':
                    draft.picture2Value = action.picture2Chosen;
                    break
                case 'catchPicture3Change':
                    draft.picture3Value = action.picture3Chosen;
                    break
                case 'catchPicture4Change':
                    draft.picture4Value = action.picture4Chosen;
                    break
                case 'catchPicture5Change':
                    draft.picture5Value = action.picture5Chosen;
                    break
                default:
                    break
                }
            }
        
        const [state, dispatch] = useImmerReducer(ReducerFunction, initialState)

    function FormSubmit(e) {
        e.preventDefault()
        console.log('Form Submitted')
        // dispatch({type: 'changeSendRequest'})
    }

    return (
            <div className={classes.formContainer}>
                <form onSubmit={FormSubmit}>
                    <Grid item container justifyContent={'center'}>
                        <Typography variant='h4'>SUBMIT A PROPERTY</Typography>
                    </Grid>
    
                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="title" 
                        label="Title" 
                        variant='standard' 
                        fullWidth
                        value={state.titleValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchTitleChange', 
                            titleChosen: e.target.value,
                        })} />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="listingType" 
                        label="Listing Type" 
                        variant='standard' 
                        fullWidth
                        value={state.titleValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchListingTypeChange', 
                            listingTypeChosen: e.target.value,
                        })} />
                </Grid>
                
                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="description" 
                        label="Description" 
                        variant='standard' 
                        fullWidth
                        value={state.descriptionValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchDescriptionChange', 
                            descriptionChosen: e.target.value,
                        })} />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="area" 
                        label="Area" 
                        variant='standard' 
                        fullWidth
                        value={state.areaValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchAreaChange', 
                            areaChosen: e.target.value,
                        })} />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="borough" 
                        label="Borough" 
                        variant='standard' 
                        fullWidth
                        value={state.boroughValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchBoroughChange', 
                            boroughChosen: e.target.value,
                        })} />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="propertyStatus" 
                        label="Property Status" 
                        variant='standard' 
                        fullWidth
                        value={state.propertyStatusValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchPropertyStatusChange', 
                            propertyStatusChosen: e.target.value,
                        })} />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="price" 
                        label="Price" 
                        variant='standard' 
                        fullWidth
                        value={state.priceValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchPriceChange', 
                            priceChosen: e.target.value,
                        })} />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="rentalFrequency" 
                        label="Rental Frequency" 
                        variant='standard' 
                        fullWidth
                        value={state.rentalFrequencyValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchRentalFrequencyChange', 
                            rentalFrequencyChosen: e.target.value,
                        })} />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <TextField 
                        id="rooms" 
                        label="Rooms" 
                        variant='standard' 
                        fullWidth
                        value={state.roomsValue}
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchRoomsChange', 
                            roomsChosen: e.target.value,
                        })} />
                </Grid>
                
                <Grid item container style={{marginTop: '1rem'}}>
                    <FormControlLabel 
                        control={<Checkbox checked={state.furnishedValue} 
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchFurnishedChange', 
                            furnishedChosen: e.target.checked,
                        })} />
                    } 
                        label="Furnished" />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <FormControlLabel 
                        control={<Checkbox checked={state.poolValue} 
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchPoolChange', 
                            poolChosen: e.target.checked,
                        })} />
                    } 
                        label="Pool" />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <FormControlLabel 
                        control={<Checkbox checked={state.elevatorValue} 
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchElevatorChange', 
                            elevatorChosen: e.target.checked,
                        })} />
                    } 
                        label="Elevator" />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <FormControlLabel 
                        control={<Checkbox checked={state.cctvValue} 
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchCCTVChange', 
                            cctvChosen: e.target.checked,
                        })} />
                    } 
                        label="CCTV" />
                </Grid>

                <Grid item container style={{marginTop: '1rem'}}>
                    <FormControlLabel 
                        control={<Checkbox checked={state.parkingValue} 
                        onChange = {(e) => 
                        dispatch({
                            type: 'catchParkingChange', 
                            parkingChosen: e.target.checked,
                        })} />
                    } 
                        label="Parking" />
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
                        className={classes.registerBtn}>
                            SUBMIT
                        </Button>
                </Grid>
                
                </form>
                
            </div>
      )
}

export default AddProperty
