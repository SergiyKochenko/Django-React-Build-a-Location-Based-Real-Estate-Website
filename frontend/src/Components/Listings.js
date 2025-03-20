import React from 'react'

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
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant='h1'>Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</Typography>
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
              position={[51.4874252340143, -0.12666449196897142]}>
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


