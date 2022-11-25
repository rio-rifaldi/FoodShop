import { useMutation } from '@apollo/client'
import { DeleteForever, DeleteOutline, Edit, MoreVert, RemoveRedEye } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, ListItemIcon, Menu, MenuItem, Rating, Stack, Typography } from '@mui/material'
import { deleteMutation, ListProduct } from 'pages/MyFood/Utils/Graphql'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from 'tss-react/mui'
import DeleteConfirm from './Components/DeleteConfirm'
import DeleteProduct from './Components/DeleteProduct'
import MenuOpstion from './Components/MenuOpstion'
import useStyles from './Style'


interface Props{
  image :string,
  alt : string,
  price :number,
  rating : number,
  labelRating: number,
  name : string,
  id ?: string,
}

function CreatorProductCard({image,alt,price,rating,labelRating,name,id}:Props) {
  const {classes} = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false)
  



  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)



  return (
    <>
      < DeleteConfirm onClose={onClose} id={id} isOpen={isOpen} name={name}/>
      <Card className={classes.Card}>  

        < MenuOpstion anchorEl={anchorEl} setAnchorEl={setAnchorEl} id={id} onOpen={onOpen} />
          <CardMedia
          component='img'
          image={image}
          alt={alt}
          sx={{maxWidth:"13rem", height:"7rem", objectFit:"cover",margin : "0",minHeight:"8rem" }}     
          />

        <CardContent> 

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
              <Typography sx={{color : "myColor.green",fontFamily : "Alice",fontSize:"1.3rem"}}>${price}</Typography>
          </CardContent>


    </Card>
  </>
  )
}

export default CreatorProductCard

