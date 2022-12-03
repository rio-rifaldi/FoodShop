import { useQuery } from '@apollo/client'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { GET_PRODUCT_DETAIL } from '../Utils/Graphql'
import { ProductDetailI } from '../Utils/Interfaces'
import useStyles from './Style'
  

function Image() {
  const {productId} = useParams()
  const {data,loading} = useQuery<ProductDetailI>(GET_PRODUCT_DETAIL,{
    variables : {
       productId
    }
 })
 
  const {classes} = useStyles();
      const setting ={
        className :classes.slider,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: (number:number) =>{
          return(
            
              <img className={classes.imageContainer} src={data?.Product.image[number].url} alt="Bibimbap" />
              
          )
        } 
      }
    

  return (
    <Box>
        <Slider {...setting} > 
        {
          data?.Product.image.map((image) =>{
            return(
            // <Box >
              <img src={image.url} alt="Bibimbap"  className={classes.imageContainer}/>
            //</Box>   
            )
          } )
        }
         </Slider>
   
    </Box>
  )
}

export default Image