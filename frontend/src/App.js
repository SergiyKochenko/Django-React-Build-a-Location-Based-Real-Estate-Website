import logo from './logo.svg'
import './App.css'
import SecondComponent from './Components/SecondComponent'
import React from 'react'
import AppleComponent from './Components/AppleComponent'
import Fruit from './Components/Fruit'

 const   theFruits = [
 {id: 1, name: "Apple", color: "red"},
 {id: 2, name: "Orange", color: "orange"},
 {id: 3, name: "Banana", color: "yellow"},
 {id: 4, name: "Kiwi", color: "green"},
 {id: 5, name: "Mango", color: "red"},
 {id: 6, name: "Avocado", color: "green"},
 ]

function App () {
  return(
    <>
      <AppleComponent />
    </>
  )
}

export default App
