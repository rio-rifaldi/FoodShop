import { Box, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import PaymentInformation from '../PaymentInformation';
import ProductConfirm from '../ProductConfirm';
import useStyles from './Style';

function PayProduct() {
    const {classes} = useStyles();
    const [isChecked, setIsChecked] = useState(false)
  return (
    <Box sx={{maxWidth:"52rem",margin:"0 auto"}} > 
        < PaymentInformation />
          <Box className={classes.mainContainerCheckOut}> 
              < ProductConfirm />
            </Box> 
      
        < FormControlLabel control={<Checkbox checked={isChecked} color="secondary" size='small'/> } label="please check your payment and address.check this if everything is correct" onChange={() => setIsChecked((prev) => !prev )} className={classes.checkBox} />


      <Button  variant='contained' size="small" color="secondary" sx={{width:"90%",margin:"0 auto",borderRadius:".4rem",display:"block"}} disabled={!isChecked && true }> Order Now </Button>
     </Box>
  )
}

export default PayProduct