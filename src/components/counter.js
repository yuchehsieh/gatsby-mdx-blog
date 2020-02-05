import React, { useState } from "react"

const Counter = () => {

  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="counter">
      <h3>click the button if you like it.</h3>
      <h3>likes: {counter}</h3>
      <button onClick={increaseCounter}>click me</button>
    </div>
  )
}

export default Counter