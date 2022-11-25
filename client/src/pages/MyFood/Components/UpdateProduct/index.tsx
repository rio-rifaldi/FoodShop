import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Detail from './Components/Detail'
import Image from './Components/Image'
import useStyles from './Style'



function UpdateProduct
() {
    const {classes} = useStyles();
  return (
    <>
    <Box mt={10}>  
        <Link to='/myFood' style={{textDecoration:"none"}} tabIndex={-1} > 
         <Button variant='outlined' className={classes.buttonBack} startIcon={< ArrowBack sx={{color :"#353945"}} />}> Go back </Button>        
         </Link>
        <Box className={classes.detailContainer} > 
            < Image />
            < Detail />
         </Box>
     </Box>
     </>
  )
}

export default UpdateProduct
