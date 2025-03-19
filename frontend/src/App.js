import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles';

// Components
import Home from './Components/Home'
import Login from './Components/Login'
import Listings from './Components/Listings'

function App () {
  return (
    <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/listings' element={<Listings/>} />
      </Routes>
    </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App
