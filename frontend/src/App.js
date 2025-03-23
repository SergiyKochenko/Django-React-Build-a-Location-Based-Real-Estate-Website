import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

// Material UI
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings'
import Header from './Components/Header';
import Testing from './Components/Testing';


function App () {
  return (
    <StyledEngineProvider injectFirst>
    <BrowserRouter>
    <CssBaseline />
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/listings' element={<Listings/>} />
        <Route path='/testing' element={<Testing/>} />
      </Routes>
    </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App
