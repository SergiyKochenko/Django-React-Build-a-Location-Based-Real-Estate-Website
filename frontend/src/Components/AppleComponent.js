import React, { useState } from 'react'

function AppleComponent () {
  const [numberOfApples, setNumberOfApples] = useState(1 + 2)

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

  function TooManyApplesDisplay () {
    if (numberOfApples > 10){
    return <h1>Sergiy has too many apples</h1>
    }else{
      return <h1>Sergiy has a reasonable amount of apples</h1>
    }
  }
  return (
    <>
    <div>
      <h1>{AppleDisplay(numberOfApples)}</h1>
    </div>
    <button onClick={increaseApples} className='add-btn'>Increase</button>
    <button 
      style={{display: numberOfApples <= 0 ? 'none' : ''}} 
      onClick={decreaseApples} 
      className='decrease-btn'
      >
        Decrease
        </button>



{
  /* {TooManyApplesDisplay()}  */
}


{numberOfApples > 10 ? <h1>Sergiy has too many apples</h1> : <h1>Sergiy has a reasonable amount of apples</h1>}

    </>
  )
}

export default AppleComponent
