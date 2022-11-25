import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Grid, InputLabel, Link, ListItem, Rating, Stack, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { StateValueContext } from 'Common/ContextApi';
import useStyles from './Style';


function Detail() {
    const {classes} = useStyles();
    const {dispatch} = useContext(StateValueContext)
  return (
    <Box className={classes.mainContainer}>
        <Typography sx={{fontFamily :"Poppins",color :"neutrals.black",fontSize :".9rem"}} > Best seller </Typography>
        <Box className={classes.headerAndFire} > 
           <Typography sx={{fontFamily:"Alice",fontSize:"1.4rem",margin:".4rem 0",fontWeight:"600"}} > Yangnyeom Chicken </Typography>
           <Typography className={classes.greenFire} > 02:21:11 </Typography>
         </Box>
         <Typography className={classes.price} > $21.99 </Typography>

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
         <Typography className={classes.paragraf} > Yangnyeom chicken (Korean: 양념치킨) is a variety of Korean fried chicken seasoned with a sweet and spicy sauce of gochujang, garlic, sugar, and other spices. It is often eaten as anju, food consumed while drinking, in South Korea. </Typography>

         <Typography className={classes.subTitle} > Adjust the flavor: </Typography>
         <Grid className={classes.grid} component="ul" container columnSpacing={5}> 

            <Grid item > 
                 <ListItem > Sugar </ListItem>
                <ListItem > Gochujang  </ListItem>
                <ListItem > Rice win vinegar </ListItem>

             </Grid>
            <Grid item> 
               <ListItem > Soy sauce  </ListItem>
                <ListItem > Garlic </ListItem>
                <ListItem > Ginger </ListItem>
           
             </Grid>
             <Grid item>  
                <ListItem > Strawberry jam </ListItem>
                <ListItem > Butter </ListItem>
              </Grid>
      
 
         </Grid>
         
         <form action="">
         <InputLabel shrink className={classes.subTitle} sx={{fontSize:"1.4rem"}} htmlFor='select-meal'> Note : </InputLabel>
            <TextField  
                placeholder="More spicy, more sauce, ..."
                multiline
                rows={3}
                fullWidth
            />
            <Stack direction={'row'} gap="1.3rem" alignItems={'center'}> 
            <Button type='submit' color='secondary' variant='contained' size="small" sx={{margin:"1rem 0"}}> ORDER NOW </Button>
            
            <Button variant='contained' color="secondary" sx={{textTransform:"capitalize"}} size="small" endIcon={< AddShoppingCart />} onClick={() => dispatch({type:"ADD_SHOPPING_CART"})}>ADD</Button>

             </Stack>
         </form>
    </Box>
  )
}

export default Detail