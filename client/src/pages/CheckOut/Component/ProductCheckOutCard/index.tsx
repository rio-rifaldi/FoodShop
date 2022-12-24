import { Add, Close, Edit, ExpandMore, Remove } from '@mui/icons-material';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material';
import useDecrementProductCart from 'pages/CheckOut/Utils/Hooks/useDecrementProductCart';
import useDeleteProductCart from 'pages/CheckOut/Utils/Hooks/useDeleteProductCart';
import useIncrementCart from 'pages/CheckOut/Utils/Hooks/useIncrementProduct';
import { useState } from 'react';
import AccorditionDesc from '../AccorditionDesc';
import useStyles from './Style';

interface Props{
    id : string,
    productName :string,
    image : string,
    price :number,
    description: string,
    productCount : number,
    key:string
}

function ProductCheckOutCard({productName,image,price,productCount,id,description}:Props) {
    const {classes} = useStyles();
    const {DeleteCart} = useDeleteProductCart(id,productCount)
    const {AddToCart} = useIncrementCart(id)
    const {DecrementCart}  = useDecrementProductCart(id)
  return (

    <Box className={classes.mainContainer}  > 
        <Box className={classes.imageAndNameContainer}>  
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
         < Divider className={classes.divider}/>
        < AccorditionDesc description={description} id={id}/>
     
     </Box>
  )
}


export default ProductCheckOutCard