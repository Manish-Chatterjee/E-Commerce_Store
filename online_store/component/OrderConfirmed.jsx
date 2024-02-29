import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Confirmed from '../public/Confirmed.json'
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';

function OrderConfirmed(props) {

  // const router = useRouter();
  // // Force refresh the page
  // const handleReload = () => {
  //   router.reload();
  // };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className='orderPopup'>
            <div id='orderConfirmed'>
                <p>Order Confirmed</p>
                <Lottie animationData={Confirmed} loop={false} id='confirmedAnimation'/>
            </div>
            <Button id='closeOrderBtn' onClick={props.onHide
              //  && handleReload
               }>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OrderConfirmed;