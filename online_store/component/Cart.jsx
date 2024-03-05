import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoCloseSharp } from "react-icons/io5";
import CloseButton from 'react-bootstrap/CloseButton';
import Image from 'next/image';
import Quantity from './Quantity';
import { ButtonGroup } from 'react-bootstrap';
import OrderConfirmed from './OrderConfirmed'
import Products from '../pages/Products'
import { RemoveFromQueue } from '@mui/icons-material';
import { FaTrash } from "react-icons/fa";

function OffCanvasExample({ name, onClearCart, onRemoveFromCart, ...props }) {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = () => {
    setModalShow(true);
  };





  return (
    <>
      <Button id="cartButtonCorner" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
          <Button variant='outline-dark' id='closeButton' onClick={handleClose}><IoCloseSharp /></Button>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {props.data?.map((product) => {
            return(
              <div className='cart'>
                <ul>
                  <li key={product.id}>
                    <Image src={product.image} alt='image' width={50} height={50} style={{margin:"5px"}}/>
                    <span id='title'>{product.title}</span>
                    <span id='quantity'>
                      <p>Quantity</p>
                      {/* <p>{product.quantity}</p> */}
                      <Quantity  quantity={product.quantity} id={product.id}/>
                      
                    </span>
                    
                    <span>
                      <Button id='removeButton' onClick={() => onRemoveFromCart(product.id)}><FaTrash /></Button>
                    </span>
                  </li>
                </ul>
              </div>
            )
          })}

          {props.data?.length === 0 ?  <p id='emptyCartText'>Your cart is empty</p> :
            <div className='orderButton'>
            {/* <Button id='orderButton' onClick={() => {setModalShow(true) && clearCart}}> */}
            <Button id='orderButton' onClick={handleButtonClick}>
              Order Now
            </Button>

            <OrderConfirmed
              show={modalShow}
              onHide={() => setModalShow(false)}
              onClearCart={onClearCart}
            />
          </div>
          }

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Cart({data, onClearCart, onRemoveFromCart}) {

  return (
    <div>
      {/* {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name="Cart" />
      ))} */}
      <OffCanvasExample placement="end" name="Cart" data={data} key={data.id} onClearCart={onClearCart} onRemoveFromCart={onRemoveFromCart}/>
    </div>
  );
}

export default Cart