import { Box, Grid } from '@mui/material'
import SimpleCard from 'Common/reusableComponent/SimpleCard'
import useFetchProduct from 'pages/Menu/utils/Graphql/Hooks/useFetchProduct'
import useStyles from './Style'


function MenuList() {
    const {classes}  = useStyles()
    const {data,loading} = useFetchProduct()
    const products = data?.GetAllProduct
  return (
        <Box my={6}>                                    
            <Grid container className={classes.container} > 
            {
                products && products.map((product) =>{
                    return(

                <Grid item >  
                    < SimpleCard image={product.image[0].url} alt={product.name} name={product.name} labelRating={297} price={product.price} rating={3.5} id={product._id}/>
                </Grid>

                    )
                } )
            }
            </Grid>
        </Box>   
   
  )
}

export default MenuList