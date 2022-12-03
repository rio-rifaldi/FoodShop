import { Add, Close, Remove } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import useDecrementProductCart from 'pages/CheckOut/Utils/Hooks/useDecrementProductCart';
import useDeleteProductCart from 'pages/CheckOut/Utils/Hooks/useDeleteProductCart';
import useAddToCart from 'pages/FoodDetail/Components/Utils/Hooks/useAddToCart';
import { useState } from 'react';
import useStyles from './Style';

interface Props{
    id : string,
    productName :string,
    image : string,
    price :number,
    productCount : number,
}

function ProductCheckOutCard({productName,image,price,productCount,id}:Props) {
    const {classes} = useStyles();
    const {DeleteCart} = useDeleteProductCart(id,productCount)
    const {AddToCart} = useAddToCart(id)
    const {DecrementCart}  = useDecrementProductCart(id)
  return (

    <Box className={classes.mainContainer} > 
            <img src={image} alt="chicken" className={classes.image}/>
         <Box sx={{width:"100%",marginLeft:"1.8rem"}} > 
            <Stack className={classes.titleStack} > 
                <Typography className={classes.productName}> {productName} </Typography>
                 <IconButton onClick={DeleteCart}>
                     < Close sx={{color: "neutrals.grey"}} />
                 </IconButton>
            </Stack>    
            <Typography className={classes.price}> ${price} </Typography>

            <Box className={classes.counterBox} > 
                <IconButton onClick={DecrementCart} disabled={productCount <= 1 && true} > < Remove fontSize='small' /> </IconButton>
                <Typography >{productCount}</Typography>
                <IconButton onClick={AddToCart}  > < Add fontSize='small'/> </IconButton>
             </Box>
         </Box>
     </Box>
  )
}


export default ProductCheckOutCard