import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Quantity from "./Quantity";
import OrderConfirmed from "./OrderConfirmed";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

function OffCanvasExample({
  name,
  onClearCart,
  onRemoveFromCart,
  setCart,
  ...props
}) {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = () => {
    setModalShow(true);
  };

  console.log(setCart, "setCart");

  return (
    <>
      <Button id="cartButtonCorner" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
          <Button variant="outline-dark" id="closeButton" onClick={handleClose}>
            <IoCloseSharp />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart">
            <ul>
              {props.data?.map((product) => {
                return (
                  <li key={product.id}>
                    <Image
                      src={product.image}
                      alt="image"
                      width={50}
                      height={50}
                      style={{ margin: "5px" }}
                    />
                    <span id="title">{product.title}</span>
                    <span id="quantity">
                      <p>Quantity</p>
                      <Quantity
                        quantity={product.quantity}
                        id={product.id}
                        setCart={setCart}
                      />
                    </span>

                    <p>{(product.price * product.quantity).toFixed(2)}</p>

                    <span>
                      <Button
                        id="removeButton"
                        onClick={() => onRemoveFromCart(product.id)}
                      >
                        <FaTrash />
                      </Button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {props.data?.length === 0 ? (
            <p id="emptyCartText">Your cart is empty</p>
          ) : (
            <div className="orderButton">
              <Button id="orderButton" onClick={handleButtonClick}>
                Order Now
              </Button>

              <OrderConfirmed
                show={modalShow}
                onHide={() => setModalShow(false)}
                onClearCart={onClearCart}
              />
            </div>
          )}
          <Total>
            <p>Total</p>
            <span>
              {props.data
                ?.reduce((accu, item) => accu + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </Total>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Cart({ data, onClearCart, onRemoveFromCart, setCart }) {
  return (
    <div>
      <OffCanvasExample
        placement="end"
        name="Cart"
        data={data}
        key={data.id}
        onClearCart={onClearCart}
        onRemoveFromCart={onRemoveFromCart}
        setCart={setCart}
      />
    </div>
  );
}

export default Cart;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 20px;
  }
`;
