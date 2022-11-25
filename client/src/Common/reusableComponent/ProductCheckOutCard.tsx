import { Add, Close, Remove } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui'


const useStyles = makeStyles() ((theme) =>{
    return{
            mainContainer :{
                display :"flex",
                width : "100%",
                padding:".7rem",
                border :`1px solid ${theme.palette.neutrals.veryYoungGrey}`,
                borderRadius:".7rem",
                transform:"scale(.87)" 
            },
            image:{
                width :"6rem"
            },
            titleStack:{
                flexDirection:"row",
                justifyContent:"space-between",
                width : "100%",
                alignItems :"center",
                marginBottom :"-.4rem"
            },
            counterBox:{
                display:"flex",
                gap:"1rem",
                alignItems:"center",
                marginTop:".7rem"
            },
            productName:{
                fontSize:"1.7rem",
                color :theme.palette.neutrals.black,
                fontWeight:500,
                fontFamily:"Alice",
            },
            price:{
                fontSize :"1.5rem",
                color : theme.palette.myColor.green,
                fontWeight:500,
                fontFamily:"Alice",
            }
    }
})

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
        {/* <Box className={classes.imageBox} >  */}
            <img src={image} alt="chicken" className={classes.image}/>
         {/* </Box> */}
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