import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Slider from 'react-slick'
import FlexCardVerySmall from 'Common/reusableComponent/FlexCardverySmall'
import useStyles from './Style'

function RelatedPost() {
    const theme = useTheme();
    const mathes = useMediaQuery(theme.breakpoints.up("xs"))
    const {classes} = useStyles();
    const setting = {
        className : classes.stackCard,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    }

    // const containerStyle ={

    // }
  return (
    <Box  > 
            <Typography sx={{margin :"1.4rem ",fontFamily:"Poppins",color:"neutrals.black",fontSize:"1.2rem"}}>Related post  </Typography>

            <Slider {...setting} >           
                        < FlexCardVerySmall />
                        < FlexCardVerySmall />
                        < FlexCardVerySmall />
                        < FlexCardVerySmall />
                        < FlexCardVerySmall />
             </Slider>
     </Box>
  )
}

export default RelatedPost