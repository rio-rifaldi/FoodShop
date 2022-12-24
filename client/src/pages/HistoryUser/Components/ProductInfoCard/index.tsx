import { Alert, Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import DialogConfirm from '../DialogConfirm';
import RatingField from '../RatingField';


import useStyles from './Style';

interface Props{
    id : string,
    productName :string,
    image : string,
    price :number,
    productCount : number,
    key:string,
    isAccepted ?: boolean,
}
const getUpdatedActionTime = (date:string) =>{
    console.clear();
    const timeMiliPast = Date.parse(date)
    const timeMiliNow = Date.parse(Date())
    const timeCurrent = new Date(timeMiliNow - timeMiliPast)
    return timeCurrent.getDate()


} 

  

function ProductInfoCard({productName,image,price,productCount,isAccepted}:Props) {
    const {classes} = useStyles();
    const [dialogConfirm, setDialogConfirm] = useState(false)
    const onClose = () =>  setDialogConfirm(false)
    const onOpen = () =>  setDialogConfirm(true)

  
  return (
    <>

        < DialogConfirm isOpen={dialogConfirm} onClose={onClose} onOpen={onOpen}/>
        
    <Box className={classes.mainContainer}  > 
        <Box className={classes.imageAndNameContainer}>  
                <img src={image} alt="chicken" className={classes.image}/>
            <Box sx={{width:"100%",marginLeft:"1.8rem"}} > 
                <Stack className={classes.titleStack} > 
                    <Typography className={classes.productName}> {productName} </Typography>
                </Stack>    
                <Typography className={classes.price}> ${price} </Typography>
                <Typography  > {  getUpdatedActionTime("2022-12-11T13:43:50.823Z")} days ago</Typography >
                <Typography className={classes.productCount} > {productCount}x </Typography>
            </Box>
         </Box>
             <Box  sx={{display:"flex",justifyContent:"flex-end",gap:".4rem"}}>  
              
            {
                isAccepted ? (
                    < RatingField />
                ):(
                    <Button variant="contained" color='secondary' size="small" sx={{textTransform:"capitalize"}} onClick={onOpen}> Accepted  </Button>
                )
            }
            </Box>  
     
     </Box>
     </>
  )
}


export default ProductInfoCard