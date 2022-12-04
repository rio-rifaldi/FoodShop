import { useQuery } from '@apollo/client';
import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Grid, InputLabel, Link, ListItem, Rating, Stack, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT_DETAIL } from '../Utils/Graphql';
import useAddToCart from '../Utils/Hooks/useAddToCart';
import { ProductDetailI } from '../Utils/Interfaces';
import useStyles from './Style';


function Detail() {
   const {productId} = useParams()
   const {classes} = useStyles();
      const {data,loading} = useQuery<ProductDetailI>(GET_PRODUCT_DETAIL,{
         variables : {
            productId
         }
      })
      const {AddToCart}  = useAddToCart(productId as string)

  return (
    <Box className={classes.mainContainer}>
        <Box className={classes.headerAndFire} >

           <Typography sx={{fontFamily:"Alice",fontSize:"1.4rem",margin:".4rem 0",fontWeight:"600"}} > {data?.Product.name} </Typography>
           <Typography className={classes.paragraf} sx={{fontSize:".8rem"}} > {data?.Product.stock} <Typography sx={{ml:.3,fontSize:".8rem"}} component='span'> available </Typography> </Typography>
         </Box>
         <Typography className={classes.price} > ${data?.Product.price} </Typography>

         <Box sx={{display:"flex",justifyContent :"space-between",paddingBottom:"1rem",borderBottom:"1.2px solid #E6E8EC",marginBottom:".5rem"}}  > 
                <Box sx={{display:"flex",gap:".7rem",alignItems:"center"}} >  
                        < Rating 
                        name='rating-food'
                        value={5}
                        readOnly
                        sx={{color : "myColor.green",fontSize:"1.3rem"}}
                    />
                    <Typography sx={{fontFamily : "Poppins",color : "#23262F",fontSize:".85rem",fontWeight:"600"}}>214 Reviews</Typography>
                 </Box>
                 <Link href="#/" className={classes.link}>View all</Link>
         </Box>

         <Typography className={classes.subTitle} > Description: </Typography>
         <Typography className={classes.paragraf} >{data?.Product.description} </Typography>

         <Typography className={classes.subTitle} > Adjust the flavor: </Typography>
         <Grid className={classes.grid} component="ul" container columnSpacing={5}> 
         <Grid item  > 
            {
               data?.Product.taste.map((taste) =>{
                  return(
                  <ListItem > {taste} </ListItem>
                  )
               } )
            }
         </Grid> 

      
 
         </Grid>
         <Typography className={classes.subTitle} > Expired: 
         <Typography className={classes.paragraf} >{data?.Product.expired} </Typography>
         </Typography> 
         <form autoComplete='off'>
            <InputLabel shrink className={classes.subTitle} sx={{fontSize:"1.4rem"}} htmlFor='select-meal'> Note : </InputLabel>
               <TextField  
                  placeholder="More spicy, more sauce, ..."
                  multiline
                  rows={3}
                  fullWidth
               />
               <Stack direction={'row'} gap="1.3rem" alignItems={'center'}> 
               <Button type='submit' color='secondary' variant='contained' size="small" sx={{margin:"1rem 0"}}> ORDER NOW </Button>
               <Button type='button' color='secondary' variant='contained' size="small" 
                  startIcon={<AddShoppingCart fontSize={"small"}/>}
                  onClick={AddToCart}
               > ADD </Button>
               </Stack>
         </form>
    </Box>
  )
}

export default Detail