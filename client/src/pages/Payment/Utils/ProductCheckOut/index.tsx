
import bibibab from "assets/images/svg/Bibimbap.svg";
import topoki from "assets/images/svg/Tokpokki.svg";
import beef from "assets/images/svg/beef.svg";
import { Box, Typography } from '@mui/material';
import ProductCheckOutCard from 'Common/reusableComponent/ProductCheckOutCard';
import useStyles from './Style';

function ProductCheckOut() {
    const {classes} = useStyles()
  return (
    <>
    <Typography className={classes.summary} >Summary</Typography>
        <Box > 
            < ProductCheckOutCard image={topoki} price={12.4} productCount={2} productName="topoki"/>   
            < ProductCheckOutCard image={beef} price={8.4} productCount={1} productName="Beef"/>   
            < ProductCheckOutCard image={bibibab} price={18.4} productCount={3} productName="Bibibab"/>   
        </Box>

            <Typography className={classes.price}> Price </Typography>
        <Box className={classes.listBillBox}> 
                <Box className={classes.listBill} > 
                    <Typography className={classes.nameBillProduct}  > Gimbap  </Typography>
                    <Typography className={classes.priceBillProduct} > $21.99 </Typography>
                </Box>
                <Box className={classes.listBill} > 
                    <Typography className={classes.nameBillProduct}  > Yangnyeom Chicken </Typography>
                    <Typography className={classes.priceBillProduct} > $21.99 </Typography>
                </Box>
                <Box className={classes.listBill} > 
                    <Typography className={classes.nameBillProduct}  > Beef noodle soup  </Typography>
                    <Typography className={classes.priceBillProduct} > $21.99 </Typography>
                </Box>
                <Box className={classes.listBillTotal} > 
                    <Typography className={classes.total}  >
                        <Typography component='mark' sx={{fontWeight:"500",color :"neutrals.black",backgroundColor:"transparent"}}> Total </Typography> 
                        (USD)
                    </Typography>
                    <Typography className={classes.priceTotal} > $65.97 </Typography>
                </Box>
            
        </Box>
    </>
  )
}

export default ProductCheckOut