import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useImmerReducer } from 'use-immer';

// Material UI
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings'
import Header from './Components/Header';
import Testing from './Components/Testing';
import Register from './Components/Register';
import AddProperty from './Components/AddProperty';
import Profile from './Components/Profile';
import Agencies from './Components/Agencies';
import AgencyDetail from './Components/AgencyDetail';
import ListingDetail from './Components/ListingDetail';

// Contexts
import DispatchContext from './Contexts/DispatchContext';
import StateContext from './Contexts/StateContext';

function App () {
  const initialState = {
    userUsername: localStorage.getItem('theUserUsername'),
    userEmail: localStorage.getItem('theUserEmail'),
    userId: localStorage.getItem('theUserId'),
    userToken:  localStorage.getItem('theUserToken'),
    userIsLogged: localStorage.getItem('theUserUsername') ? true : false,         
      }
      
      function ReducerFunction(draft, action) {
          switch (action.type) {
            case 'cacheToken':
              draft.userToken = action.tokenValue;
              break;
            case 'userSignsIn':
              draft.userUsername = action.usernameInfo;
              draft.userEmail = action.emailInfo;
              draft.userId = action.idInfo;
              draft.userIsLogged = true;
              break;
            case 'logout':
              draft.userIsLogged = false;
              break;            
            default:
              break;
          }
          }
      
      const [state, dispatch] = useImmerReducer(ReducerFunction, initialState)

  useEffect(() => {
    if (state.userIsLogged) {
      localStorage.setItem('theUserUsername', state.userUsername)
      localStorage.setItem('theUserEmail', state.userEmail)
      localStorage.setItem('theUserId', state.userId)
      localStorage.setItem('theUserToken', state.userToken)
    }
    else {
      localStorage.removeItem('theUserUsername')
      localStorage.removeItem('theUserEmail')
      localStorage.removeItem('theUserId')
      localStorage.removeItem('theUserToken')
    }
  }, [state.userIsLogged, state.userUsername, state.userEmail, state.userId, state.userToken])

  return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}> 
    <StyledEngineProvider injectFirst>
    <BrowserRouter>
    <CssBaseline />
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/addproperty' element={<AddProperty/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/agencies' element={<Agencies/>} />
        <Route path='/agencies/:id' element={<AgencyDetail/>} />
        <Route path='/listings/:id' element={<ListingDetail/>} />
        <Route path='/listings' element={<Listings/>} />
        <Route path='/testing' element={<Testing/>} />
      </Routes>
    </BrowserRouter>
    </StyledEngineProvider>
    </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
