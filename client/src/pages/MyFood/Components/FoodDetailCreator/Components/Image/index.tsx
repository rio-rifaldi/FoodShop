import { useQuery } from '@apollo/client'
import { Box } from '@mui/material'
import { ProductDetail } from 'pages/MyFood/Utils/Graphql'
import { ProductI } from 'pages/MyFood/Utils/Interfaces'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import useStyles from './Style'
  

function Image() {
  const {productId} = useParams()
  const {data,loading} = useQuery<ProductI>(ProductDetail,{
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
    <>
        <Slider {...setting} > 
        {
          data?.Product.image.map((image) =>{
            return(
            // <Box >
              <img src={image.url} alt="Bibimbap"   className={classes.imageContainer}/>
            //</Box>   
            )
          } )
        }
         </Slider>
   
    </>
  )
}

export default Image