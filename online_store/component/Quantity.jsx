import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Quantity(props) {
  const [count, setCount] = useState(props.quantity); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.


  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div style={{display:"flex", alignItems:"center"}}>
      <Button onClick={increment}>+</Button>
      <h1>{count}</h1>
      {console.log(count,'count')}
      <Button onClick={decrement}>-</Button>
    </div>
  );
}
