import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import PayProduct from './Component/PayProduct'
import useStyles from './Component/PayProduct/Style'



function Payment() {
  const {classes} = useStyles()
  return (
    <Box mt={10}>
      <Link to={'/checkOut'}  tabIndex={-1} style={{textDecoration:"unset"}}> 
           <Button variant='outlined' className={classes.buttonBack} startIcon={< ArrowBack sx={{color :"#353945"}} />}> Go back </Button> 
         </Link>
      < PayProduct />
    </Box>
  )
}

export default Payment