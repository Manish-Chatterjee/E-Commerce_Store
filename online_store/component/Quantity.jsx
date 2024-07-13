import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Quantity(props) {
  const [count, setCount] = useState(props.quantity); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  
  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 1);
      }
    });
  }


  return (
    <div style={{display:"flex", alignItems:"center"}}>
      <Button id="decrement" onClick={decrement}>-</Button>
      <h4>{count}</h4>
      <Button id="increment" onClick={increment}>+</Button>
    </div>
  );
}

