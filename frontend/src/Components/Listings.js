import React, { useState } from 'react'

// React Leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

// Material UI
import { Grid, AppBar, Typography, Button } from '@mui/material'

// Map icon
import houseIconPng from './Assets/Mapicons/house.png'
import apartmentIconPng from './Assets/Mapicons/apartment.png'
import officeIconPng from './Assets/Mapicons/office.png'
// Assets
import img1 from './Assets/img1.jpg'


function Listings () {

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

  function GoEast () {
    setLatitude(51.46564994849639)
    setLongitude(0.2596953983050364)
  }

  function GoCenter () {
    setLatitude(51.4874252340143)
    setLongitude(-0.12666449196897142)
  }

  return (
    <Grid container>
      <Grid item xs={4}>
        <Button onClick={GoEast}>GO EAST</Button>
        <Button onClick={GoCenter}>GO CENTER</Button>
      </Grid>
      <Grid item xs={8}>
        <AppBar position='sticky'>
          <div style={{ height: '100vh'}}>
          <MapContainer center={[51.505, -0.09]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
              icon={officeIcon}
              position={[latitude, longitude]}>
              <Popup>
                <Typography variant='h5'>A title</Typography>
                <img src={img1} alt='img1' style={{ height: '14rem', width: '18rem' }} />
                <Typography variant='body1'>A description</Typography>
                <Button variant='contained' fullWidth>View</Button>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        </AppBar>
      </Grid>
    </Grid>
  )
}

export default Listings


