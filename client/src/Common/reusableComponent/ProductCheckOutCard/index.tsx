import { Add, Close, Remove } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import useStyles from './Style';




interface Props{
    productName :string,
    image : string,
    price :number,
    productCount : number,
}

function ProductCheckOutCard({productName,image,price,productCount}:Props) {
    const {classes} = useStyles();
    const [count, setCount] = useState(productCount);

  return (

    <Box className={classes.mainContainer} > 
            <img src={image} alt="chicken" className={classes.image}/>
         <Box sx={{width:"100%",marginLeft:"1.8rem"}} > 
            <Stack className={classes.titleStack} > 
                <Typography className={classes.productName}> {productName} </Typography>
                 <IconButton > < Close sx={{color: "neutrals.grey"}} /> </IconButton>
            </Stack>    
            <Typography className={classes.price}> ${price} </Typography>

            <Box className={classes.counterBox} > 
                <IconButton onClick={() => setCount( prev => prev !== 0 ? prev - 1 :0 )}  > < Remove fontSize='small' /> </IconButton>
                <Typography >{count}</Typography>
                <IconButton onClick={() => setCount( prev => prev + 1)}  > < Add fontSize='small'/> </IconButton>
             </Box>
         </Box>
     </Box>
  )
}


export default ProductCheckOutCard