import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import TabOrderHistory from './Components/TabOrderHistory'
import useStyles from './Style'
type Props = {}



const HistoryUser = () => {
    const {classes} = useStyles()
  
  return (
    <Box mt={10}>
  
    
        <Link to={'/profile'} tabIndex={0} style={{textDecoration:"unset"}}>  
            <Button variant='outlined' className={classes.buttonBack} startIcon={< ArrowBack sx={{color :"#353945"}} />}> Go back </Button> 
          </Link>
          < TabOrderHistory />
      </Box>
  )
}


export default HistoryUser