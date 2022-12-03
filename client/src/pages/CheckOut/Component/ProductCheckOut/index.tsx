import { Box, Typography } from '@mui/material';

import useFetchProductCart from 'pages/CheckOut/Utils/Hooks/useFetchProductCart';
import ProductCheckOutCard from '../ProductCheckOutCard';
import useStyles from './Style';

function ProductCheckOut() {
    const {classes} = useStyles()
    const {data,loading} = useFetchProductCart()
    const carts = data?.GetProductInCart   
    let price =  carts ? carts.map((cart) => cart.price * cart.amount) : []
    let cartTotal = price.length !== 0 ? price.reduce((accumulator,currentValue) =>{
        return accumulator + currentValue
    },0 ) : 0
  return (
    <Box>
        {
            carts &&
            carts.length <= 0 ?(
                <>
                you dont have product
                </>
            ):(
                <>
                <Typography className={classes.summary} >Summary</Typography>
                    <Box > 
                        {
                        carts && carts.map((cart) =>{
                            return(
                                < ProductCheckOutCard image={cart.imageUrl} price={cart.price} productCount={cart.amount} productName={cart.name} id={cart.productId}/>   
                            )
                        } )  
                        }
                    </Box>

                    <Typography className={classes.price}> Price </Typography>
                <Box className={classes.listBillBox}> 
                    {
                        carts && carts.map((cart) =>{
                            return(

                        <Box className={classes.listBill} > 
                            <Typography className={classes.nameBillProduct}  >  {cart.name} <span style={{marginLeft:".3rem"}}>{cart.amount}x</span>  </Typography>
                            <Typography className={classes.priceBillProduct} > ${cart.price * cart.amount} </Typography>
                        </Box>

                            )
                        })
                    }
                        <Box className={classes.listBillTotal} > 
                            <Typography className={classes.total}  >
                                <Typography component='mark' sx={{fontWeight:"500",color :"neutrals.black",backgroundColor:"transparent"}}> Total </Typography> 
                                (USD)
                            </Typography>
                            <Typography className={classes.priceTotal} > $ {cartTotal} </Typography>
                        </Box>
                    
                </Box>
                
                </>
             
            )
        }
    </Box>
  )
}

export default ProductCheckOut