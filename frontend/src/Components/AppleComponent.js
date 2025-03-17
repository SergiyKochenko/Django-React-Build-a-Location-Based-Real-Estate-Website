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
  return (
    <div>
      <h1>{AppleDisplay(numberOfApples)}</h1>
    </div>
  )
}

export default AppleComponent
