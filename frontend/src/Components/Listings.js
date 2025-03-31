import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useImmerReducer } from 'use-immer'

// React Leaflet
import { 
  MapContainer, 
  TileLayer, 
  Marker, 
  Popup, 
  Polyline,
  Polygon,
  useMap,
} from 'react-leaflet'
import { Icon } from 'leaflet'

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
  IconButton,
  CardActions,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import RoomIcon from '@mui/icons-material/Room';

// Map icon
import houseIconPng from './Assets/Mapicons/house.png'
import apartmentIconPng from './Assets/Mapicons/apartment.png'
import officeIconPng from './Assets/Mapicons/office.png'
// Assets
import img1 from './Assets/img1.jpg'
import myListings from './Assets/Data/Dummydata'
import polygonOne from './Shape'

const useStyles = makeStyles({
  cardStyle: {
    margin: '0.5rem',
    border: '1px solid black',
    position: 'relative',
  },
  pictureStyle: {
    paddingRight: '1rem',
    paddingLeft: '1rem',
    height: '20rem',
    width: '30rem',
  },
  priceOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(11, 207, 37, 0.94)',
    zIndex: '1000',
    color: 'white',
    top: '100px',
    left: '20px',
    padding: '5px',
  },
})



function Listings () {

// fetch('http://127.0.0.1:8000/api/listings/')
//   .then(response => response.json())
//   .then(data => console.log(data))

  const classes = useStyles()
  const houseIcon = new Icon({
    iconUrl: houseIconPng,
    iconSize: [40, 40],
  })
  const apartmentIcon = new Icon({
    iconUrl: apartmentIconPng,
    iconSize: [40, 40],
  })
  const officeIcon = new Icon({
    iconUrl: officeIconPng,
    iconSize: [40, 40],
  })

  const [latitude, setLatitude] = useState(51.4874252340143)
  const [longitude, setLongitude] = useState(-0.12666449196897142)

  const initialState = {
          mapInstance: null,
      };
  
      function ReducerFunction(draft, action) {
          switch (action.type) {
              case 'getMap':
                  draft.mapInstance = action.mapData;
                  break;
              default:
                  break;
          }
      }
  
      const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);
  
      function TheMapComponent() {
          const map = useMap();
          dispatch({ type: 'getMap', mapData: map });
          return null;
      }

  function GoEast () {
    setLatitude(51.46564994849639)
    setLongitude(0.2596953983050364)
  }

  function GoCenter () {
    setLatitude(51.4874252340143)
    setLongitude(-0.12666449196897142)
  }

  const polyOne = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]

  const [allListings, setAllListings] = useState([])
  const [dataIsLoading, setDataIsLoading] = useState(true)

  useEffect(() => {
    const source = Axios.CancelToken.source()
    async function GetAllListings () {
      try {
        const response = await Axios.get('http://127.0.0.1:8000/api/listings/', {
          cancelToken: source.token
        })
        setAllListings(response.data)
        setDataIsLoading(false)
      } catch (error) {
        console.log(error.response)
      }
    }
    GetAllListings()
    return () => {
      source.cancel()
    }
  }, [])
  if (dataIsLoading === false) {
    console.log(allListings[0].location)
  }

  if (dataIsLoading === true) {
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
    <Grid container>
      <Grid item xs={4}>
        {allListings.map((listing) => {
          return(
          <Card key={listing.id} className={classes.cardStyle}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => state.mapInstance.flyTo([listing.latitude, listing.longitude], 16)}>
            <RoomIcon />
          </IconButton>
        }
        title={listing.title}
      />
      <CardMedia
        className={classes.pictureStyle}
        component="img"
        image={listing.picture1}
        alt={listing.title}
      />
      <CardContent>
        <Typography variant="body2">
          {listing.description.substring(0, 150)} ...
        </Typography>
      </CardContent>
      {listing.property_status === "Sale" ? (
        <Typography className={classes.priceOverlay}>
          {listing.listing_type}: 
          €
          {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
      ) : (
        <Typography className={classes.priceOverlay}>
          {listing.listing_type}: 
          €
          {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        / {listing.rental_frequency}</Typography>
      )}
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {listing.seller_agency_name}
        </IconButton>
      </CardActions>
    </Card>
        )
        })}
      </Grid>
      <Grid item xs={8} style={{ marginTop: '0.5rem' }}>
        <AppBar position='sticky'>
          <div style={{ height: '100vh'}}>
          <MapContainer style={{ height: '100%', width: '100%' }} center={[51.505, -0.09]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <TheMapComponent />

            {allListings.map((listing) => {
              function IconDisplay () {
                if (listing.listing_type === 'House') {
                  return houseIcon
                } else if (listing.listing_type === 'Apartment') {
                  return apartmentIcon
                } else if (listing.listing_type === 'Office') {
                  return officeIcon
                }
              }
              return (
                <Marker 
                key={listing.id}
                icon={IconDisplay()}
                  position={[
                    listing.latitude, 
                    listing.longitude,
                    ]}>

                      <Popup>
                <Typography variant='h5'>{listing.title}</Typography>
                <img src={listing.picture1} alt='picture1' style={{ height: '14rem', width: '18rem' }} />
                <Typography variant='body1'>{listing.description.substring(0, 150)} ...</Typography>
                <Button variant='contained' fullWidth>View</Button>
              </Popup>

                </Marker>
              )
            })}

            {/* <Marker 
              icon={officeIcon}
              position={[latitude, longitude]}>
              <Popup>
                <Typography variant='h5'>A title</Typography>
                <img src={img1} alt='img1' style={{ height: '14rem', width: '18rem' }} />
                <Typography variant='body1'>A description</Typography>
                <Button variant='contained' fullWidth>View</Button>
              </Popup>
            </Marker> */}
          </MapContainer>
        </div>
        </AppBar>
      </Grid>
    </Grid>
  )
}

export default Listings


