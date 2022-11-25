import { Box } from '@mui/material'
import Slider from 'react-slick'
import Bibimbap from "assets/images/svg/Bibimbap.svg"
import chicken from "assets/images/svg/chiken.svg"
import salad from "assets/images/svg/foodSalad.svg"
import topoki from "assets/images/svg/Tokpokki.svg"
import useStyles from './Style'
  

function Image() {
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
        customPaging: () =>{
          return(
            <img src={chicken} alt="chicken" />
          )
        } 
      }
  return (
    <>
        <Slider {...setting} > 
              <Box  > <img className={classes.imageContainer} src={chicken} alt="chicken" /> </Box>
              <Box > <img className={classes.imageContainer}src={topoki} alt="topoki" /> </Box>
              <Box  > <img className={classes.imageContainer}src={Bibimbap} alt="Bibimbap" /> </Box>
              <Box  > <img className={classes.imageContainer}src={salad} alt="salad" /> </Box>
         </Slider>
    </>
  )
}

export default Image