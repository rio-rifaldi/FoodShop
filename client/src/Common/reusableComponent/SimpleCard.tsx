import { Delete, DeleteForever, Edit, MoreVert, RemoveRedEye } from '@mui/icons-material'
import { Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, ListItemIcon, Menu, MenuItem, Rating, Stack, Typography } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from 'tss-react/mui'


const useStyles = makeStyles() ((theme) =>{
  return{
    Card :{
      "& .MuiCardActionArea-root:hover > img":{
        transform :"scale(1.08)",
      },
      "& .MuiCardActionArea-root > img":{
        transition :"transform .5s ease-in-out"
      },
      "& .Mui-focusVisible.MuiCardActionArea-root > img":{
        transform :"scale(1.08)",
        transition :"transform .5s ease-in-out"
      },
      "& .MuiCardActionArea-root > span":{
          display :"none"
      },
      
      [theme.breakpoints.up(800)]:{
        maxWidth : "13.5rem"
      },
      boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",
      borderRadius : ".3rem",
      transition :"transform .2s ease-in-out",
      padding:"0",
      position : 'relative',
    },

    iconButton:{
      position : "absolute",
      zIndex : 10,
      right : ".1rem"
    } 

  }
})
interface Props{
  image :string,
  alt : string,
  price ?:number,
  rating : number,
  labelRating: number,
  name : string,
  id ?: string,
  creator ?: boolean
}

function SimpleCard({image,alt,price,rating,labelRating,name,creator,id}:Props) {
  const {classes} = useStyles()
  return (
    <>

      <Card className={classes.Card} sx={creator ? {height : "14rem"} : {   height :"15.4rem"}}>  
  
      <CardActionArea disableRipple  > 

          <CardMedia
          component='img'
          image={image}
          alt={alt}
          sx={{ height:"6.6rem", objectFit:"scale-down",margin : "0",minHeight:"8rem" }}     
          />
        <CardContent   > 

              <Typography component={'h1'} sx={{fontFamily : "Alice",color : "#23262F",fontSize :"clamp(0.78rem, 0.7286rem + 0.2286vw, 0.9rem)"}} >{name} </Typography> 
          
            <Stack direction={"row"} spacing={1} alignItems="center" mb={"4.8px"} ml={"-1px"} mt=".14rem"> 
              < Rating 
                name='rating-food'
                value={rating}
                readOnly
                sx={{color : "myColor.green",fontSize:".9rem"}}
              />
              <Typography sx={{fontFamily : "Poppins",color : "#23262F",fontSize:"clamp(0.5rem, 0.4068rem + 0.3243vw, 0.65rem)"}}>{labelRating} Reviews</Typography>
            </Stack>  
            {
              price &&(

                <Typography sx={{color : "myColor.green",fontFamily : "Alice",fontSize:"1.3rem"}}>${price}</Typography>
              )
            }          
          </CardContent>
        
      </CardActionArea>


    </Card>
  </>
  )
}

export default SimpleCard

