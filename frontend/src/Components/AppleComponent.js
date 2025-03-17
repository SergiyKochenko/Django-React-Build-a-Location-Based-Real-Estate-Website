import React from 'react'

function AppleComponent () {
  function AppleDisplay (n) {
    if (n === 0 || n === 1) {
      return `Sergiy has ${n} apple`
    } else if (n > 1) {
      return `Sergiy has ${n} apples`
    } else {
      return `Sergiy owes us ${Math.abs(n)} apples`
    }
  }
  return (
    <div>
      <h1>{AppleDisplay(-2)}</h1>
    </div>
  )
}

export default AppleComponent
