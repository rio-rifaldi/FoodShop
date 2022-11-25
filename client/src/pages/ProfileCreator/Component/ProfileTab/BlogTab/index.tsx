import { Box, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import arrow from 'assets/images/svg/Arrow 2.svg'
import FlexCardVerySmall from 'Common/reusableComponent/FlexCardverySmall'

type Props = {
    
}

const BlogTab = (props: Props) => {
  let settingsBlog = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    adaptiveHeight:false,
    variableWidth:false,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2   
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const match = useMediaQuery("(min-width:450px)")
return (
 <>
     <Box sx={{display:"flex",justifyContent:"space-between",mt:1,alignItems:"center"}} > 
        <Typography sx={{fontSize:"1.2rem"}}> Best Viewed </Typography>
        <Link to='#/' style={{textDecoration:"none",color :"transparent"}}>  
            <Typography 
              sx={{  
                "&::after" : {
                content : `url('${arrow}')`,
                display :"inline-block",
                fontSize : "clamp(0.07rem, 0.0596rem + 0.0462vw, 0.1rem)",
                verticalAlign :"middle",
                margin :"0 .5rem"
            },
            color :"myColor.green",
            fontSize :"clamp(0.7rem, 0.6481rem + 0.2308vw, 0.85rem)"
          }}
            > View All </Typography>
        </Link>
     </Box>
        <Slider {...settingsBlog}> 
            < FlexCardVerySmall small={!match ? true : false} />
            < FlexCardVerySmall small={!match ? true : false} />
            < FlexCardVerySmall small={!match ? true : false} />
            < FlexCardVerySmall small={!match ? true : false} />

        </Slider>

        <Box sx={{display:"flex",justifyContent:"space-between",mt:6,alignItems:"center"}} > 
        <Typography sx={{fontSize:"1.2rem"}}> Recent Post </Typography>
        <Link to='#/' style={{textDecoration:"none",color :"transparent"}}>  
            <Typography 
              sx={{  
                "&::after" : {
                content : `url('${arrow}')`,
                display :"inline-block",
                fontSize : "clamp(0.07rem, 0.0596rem + 0.0462vw, 0.1rem)",
                verticalAlign :"middle",
                margin :"0 .5rem"
            },
            color :"myColor.green",
            fontSize :"clamp(0.7rem, 0.6481rem + 0.2308vw, 0.85rem)"
          }}
            > View All </Typography>
        </Link>
     </Box>
        <Slider {...settingsBlog}> 
            < FlexCardVerySmall small={!match ? true : false} />
            < FlexCardVerySmall small={!match ? true : false} />
            < FlexCardVerySmall small={!match ? true : false} />
            < FlexCardVerySmall small={!match ? true : false} />
        </Slider>
 </>
)
}

export default BlogTab