import { Card, CardActionArea, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import useStyles from './Style'
import { Props } from './Utils/Interfaces'





function SimpleCard(props:Props) {
  let {image,alt,price,rating,labelRating,name,creator,id} = props
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

