import logo from './logo.svg'
import './App.css'
import SecondComponent from './Components/SecondComponent'
import React from 'react'
import AppleComponent from './Components/AppleComponent'
import Fruit from './Components/Fruit'

function App () {
  return(
    <>
    <Fruit name='banana' color='yellow' />
    <Fruit name='strawberry' color='red' />
    </>)
}

export default App
