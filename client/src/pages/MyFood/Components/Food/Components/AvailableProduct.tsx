import { Refresh } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CreatorProductCard from '../../CreatorProductCard'
import useStyles from '../Style'
import useFetchProduct from './useFetchProduct'

type Props = {}

const AvailableProduct = (props: Props) => {
    const {classes} = useStyles()
    const {fetch,data} = useFetchProduct()
  return (
    <Box mb={10} sx={{}}> 
    <Typography sx={{textAlign:"center",fontSize:"2.3rem",fontFamily:"Alice",}}> My Food </Typography>


    <Box mt={3} sx={{mx:".3rem"}} > 
    <Link to={'AddProduct'} style={{textDecoration:"unset"}}>  
      <Button variant='contained' size='small'> add Product  </Button>
    </Link>
    <IconButton onClick={fetch} > 
    < Refresh />  
     </IconButton>
        < Typography> Best Seller  </Typography>   
        <Box className={classes.cardListWrap}> 
        
        {
          data?.ListProduct.map((product) =>{
            return(
              < CreatorProductCard image={product.image[0].url} alt={product.name} name={product.name} labelRating={0} price={product.price} rating={1.5}  id={product._id} key={Math.random()}/>
            )
          } )
        }

        </Box>
    </Box>
</Box>
  )
}

export default AvailableProduct