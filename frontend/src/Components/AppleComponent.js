import React, { useState } from 'react'

function AppleComponent () {
  const [numberOfApples, setNumberOfApples] = useState(1 + 3)

  function AppleDisplay (numberOfApples) {
    if (numberOfApples === 0 || numberOfApples === 1) {
      return `Sergiy has ${numberOfApples} apple`
    } else if (numberOfApples > 1) {
      return `Sergiy has ${numberOfApples} apples`
    } else {
      return `Sergiy owes us ${Math.abs(numberOfApples)} apples`
    }
  }
  function increaseApples(){
    setNumberOfApples((currentValue) => currentValue +1)
  }
  function decreaseApples(){
    setNumberOfApples((currentValue) => currentValue -1)
  }
  return (
    <>
    <div>
      <h1>{AppleDisplay(numberOfApples)}</h1>
    </div>
    <button onClick={increaseApples} className='add-btn'>Increase</button>
    <button onClick={decreaseApples} className='decrease-btn'>Decrease</button>
    </>
  )
}

export default AppleComponent
