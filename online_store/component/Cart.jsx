import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoCloseSharp } from "react-icons/io5";
import CloseButton from 'react-bootstrap/CloseButton';
import Image from 'next/image';
import Quantity from './Quantity';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="cartButton" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
          {/* <Button variant='outline-dark' id='closeButton'><IoCloseSharp /></Button> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}

          {props.data.map((product) => {
            return(
              <div className='cart'>
                <ul>
                  <li key={product.id}>
                    <Image src={product.image} alt='image' width={50} height={50} style={{margin:"5px"}}/>
                    <span id='title'>{product.title}</span>
                    <span id='quantity'>
                      <p>Quantity</p>
                      <p>{product.quantity}</p>
                      {/* <Quantity  quantity={product.quantity} id={product.id}/> */}
                    </span>
                  </li>
                </ul>
              </div>
            )
          })}

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Cart({data}) {

  return (
    <div>
      {/* {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name="Cart" />
      ))} */}
      <OffCanvasExample placement="end" name="Cart" data={data} key={data.id}/>
    </div>
  );
}

export default Cart