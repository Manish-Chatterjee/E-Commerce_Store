import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { TiShoppingCart } from "react-icons/ti";

export default function AddedNotify() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} style={{background:"none"}}>
          {/* Top-Center */}
          <TiShoppingCart id='cartButton'/>
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500}}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Added to cart"
        key={vertical + horizontal}
        autoHideDuration={800}
      />
    </Box>
  );
}
