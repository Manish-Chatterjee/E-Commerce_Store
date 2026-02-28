import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Quantity({ setCart, id, quantity }) {
  // const [count, setCount] = useState(props.quantity);
  // console.log(count,'count')
  console.log(setCart,'setCart')

  // console.log(setCart(),'props')

  // function increment() {
  //   setCount(function (prevCount) {
  //     return (prevCount += 1);
  //   });
  // }

  // function decrement() {
  //   setCount(function (prevCount) {
  //     if (prevCount > 1) {
  //       return (prevCount -= 1);
  //     } else {
  //       return (prevCount = 1);
  //     }
  //   });
  // }

  function increment() {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  function decrement() {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item,
      );
    });
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button id="decrement" onClick={decrement}>
        -
      </Button>
      <h4>{quantity}</h4>
      <Button id="increment" onClick={increment}>
        +
      </Button>
    </div>
  );
}
