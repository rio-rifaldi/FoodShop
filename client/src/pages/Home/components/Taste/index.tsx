import { Box, Stack, Typography } from '@mui/material'
import HotFoodIcon from "assets/images/svg/hotFood.svg"
import OrderIcon from "assets/images/svg/order.svg"
import TruckIcon from "assets/images/svg/truck.svg"
import useStyles from './Style'


function Taste() {
   const {classes} = useStyles();
  return (
    <Box my={14}> 
        <Typography component={'h1'} className={classes.mainText} > 
            How we keep your meal  <Typography component={'mark'} className={classes.markText}> Delicious </Typography>
         </Typography>  


           <Stack  mt={9} className={classes.cardContainer} spacing={2} > 
              <Box className={classes.card} > 
                  <Box  className={classes.image} > <img src={OrderIcon} alt="orderIconImage" width={38} /> </Box>
                  <Typography component={"h1"} className={classes.cardHeader} mt={3} > Receive The Order </Typography>
                  <Typography className={classes.cardPara} mt={"3px"} > That help us know what delicious meal you will try, but I don’t write anything </Typography>
               </Box>
              <Box className={classes.cardShadow} > 
                  <Box className={classes.image}> <img src={HotFoodIcon} alt="Hot food icon Image" width={38} /> </Box>
                  <Typography component={"h1"} className={classes.cardHeader} mt={3} > Receive The Order </Typography>
                  <Typography className={classes.cardPara}  mt={"3px"} > That help us know what delicious meal you will try, but I don’t write anything </Typography>
               </Box>
              <Box className={classes.card} > 
                  <Box  className={classes.image} > <img src={TruckIcon} alt="TruckIconImage" width={38} /> </Box>
                  <Typography component={"h1"} className={classes.cardHeader} mt={3} > Receive The Order </Typography>
                  <Typography className={classes.cardPara}  mt={"3px"} > That help us know what delicious meal you will try, but I don’t write anything </Typography>
               </Box>
          </Stack>
     </Box>
  )
}

export default Taste