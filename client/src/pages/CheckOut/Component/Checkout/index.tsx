import { ArrowBack } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FormPayment from '../FormPayment';
import ProductCheckOut from '../ProductCheckOut';
import useStyles from './Style';

function Checkout() {
    const {classes} = useStyles();
  return (
    <Box mt={10}> 
        <Link to={'/home'}  tabIndex={0} style={{textDecoration:"unset"}}>  
          <Button variant='outlined' className={classes.buttonBack} startIcon={< ArrowBack sx={{color :"#353945"}} />}> Go back </Button> 
        </Link>

        <Box className={classes.mainContainer}> 
            <Box className={classes.mainContainerForm} > 
            < FormPayment />
             </Box>

           <Box className={classes.mainContainerCheckOut}> 
           < ProductCheckOut />
             </Box> 
        </Box>
     </Box>
  )
}

export default Checkout