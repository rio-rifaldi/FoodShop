import { ArrowBack } from "@mui/icons-material"
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Detail from './Components/Detail'
import RelatedPost from './Components/RelatedPost'
import useStyles from './Style'


function BlogDetail() {
    const {classes} = useStyles();
  return (
    <Box sx={{overflowX:"hidden"}} mt={10}> 
    <Link to={'/blog'} tabIndex={0} style={{textDecoration:"unset"}}> 
        <Button variant='outlined' className={classes.buttonBack} startIcon={< ArrowBack sx={{color :"#353945"}} />}> Go back </Button> 
       </Link>
        < Detail /> 
        < RelatedPost />  
     </Box>
  )
}

export default BlogDetail