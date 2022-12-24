import { Box, Divider, Stack, Typography } from '@mui/material';
import { minimizeContent } from 'pages/Payment/Utils/Functions';
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

function ProductConfirmCard({productName,image,price,productCount,id,description}:Props) {
    const {classes} = useStyles();

  return (

    <Box className={classes.mainContainer}  > 
        <Box className={classes.imageAndNameContainer}>  
                <img src={image} alt="chicken" className={classes.image}/>
            <Box sx={{width:"100%",marginLeft:"1.8rem"}} > 
                <Stack className={classes.titleStack} > 
                    <Typography className={classes.productName}> {productName} </Typography>
                </Stack>    
                <Typography className={classes.price}> ${price} </Typography>
                <Typography > {productCount}x </Typography>
            </Box>
         </Box>
         < Divider className={classes.divider}/>
        <Typography sx={{my:".4rem"}}> Description </Typography>
        <Typography sx={{fontSize:".9rem"}}> {minimizeContent(description,100)} </Typography>
     
     </Box>
  )
}


export default ProductConfirmCard