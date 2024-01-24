import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoCloseSharp } from "react-icons/io5";

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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Cart() {
  return (
    <div>
      {/* {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name="Cart" />
      ))} */}
      <OffCanvasExample  placement="end" name="Cart" />
    </div>
  );
}

export default Cart