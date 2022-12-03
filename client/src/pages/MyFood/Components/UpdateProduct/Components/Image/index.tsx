import { useMutation, useQuery } from '@apollo/client'
import { DeleteForever } from '@mui/icons-material'
import { Box, CircularProgress, IconButton } from '@mui/material'
import { DeleteImageProduct, ProductDetail } from 'pages/MyFood/Utils/Graphql'
import { ProductI } from 'pages/MyFood/Utils/Interfaces'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import useStyles from './Style'
  

function Image() {
  const {productId} = useParams()
  const [DeleteImage,{loading}] = useMutation(DeleteImageProduct)
  const {data,refetch} = useQuery<ProductI>(ProductDetail,{
    variables : {
       productId
    }
 })
 
  const {classes} = useStyles();
      const setting ={
        className :classes.slider,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: (number:number) =>{
          return(
            
              <img className={classes.imageContainer} src={data?.Product.image[number]?.url} alt="Bibimbap" />
              
          )
        } 
      }
    
      const onDeleteImage = async (publicId:string) =>{
          const result = await DeleteImage({
            variables :{
              productId,
              publicId 
            }
          })
          if(result.data){
            refetch({   variables : {
              productId
           }})
          }
      } 
  return (
    <>
        <Slider {...setting} > 
        {
          data?.Product.image.map((image) =>{
            return(
              <Box sx={{width:"6rem",position:"relative"}}>
                {
              data.Product.image.length > 1 &&(
                <IconButton sx={{
                  position :"absolute",
                    right :"1rem"
                  }}
                  onClick={() =>  onDeleteImage(image?.public_id)} 
                  size={'large'}
                  disabled={loading && true}
                > 
                  {
                    loading ?(
                      <CircularProgress color="primary" size={30} />
                    ):(
                      < DeleteForever fontSize="large" />  
                    )
                  }
                 </IconButton>
              )
                }
              <img src={image.url} alt="Bibimbap"   className={classes.imageContainer}/>
            </Box>   
            )
          } )
        }
         </Slider>
   
    </>
  )
}

export default Image