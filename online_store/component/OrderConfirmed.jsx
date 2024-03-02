import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Confirmed from '../public/Confirmed.json'
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';

function OrderConfirmed(props) {

  // console.log(props,'props15')

  const handleClose = () => {
    props.onHide();
    props.onClearCart();
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Body>
        <div className='orderPopup'>
            <div id='orderConfirmed'>
                <p>Order Confirmed</p>
                <Lottie animationData={Confirmed} loop={false} id='confirmedAnimation'/>
            </div>
            <Button id='closeOrderBtn' onClick={handleClose}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OrderConfirmed;