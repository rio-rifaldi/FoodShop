import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import arrow from 'assets/images/svg/Arrow 2.svg'
import topoki from 'assets/images/svg/robot-checking-user-profile.svg'
import SimpleCard from 'Common/reusableComponent/SimpleCard'
type Props = {}

const ShopTab = (props: Props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight:false,
    variableWidth:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3   
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

return (
    <>
    <Box sx={{display:"flex",justifyContent:"space-between",mt:1,alignItems:"center"}} > 
        <Typography sx={{fontSize:"1.2rem"}}> Best seller </Typography>
        <Link to='myFood' style={{textDecoration:"none",color :"transparent"}}>  
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

          <Slider {...settings}>  
              < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
              < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
              < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
              < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
              </Slider>

    <Box sx={{display:"flex",justifyContent:"space-between",mt:6,alignItems:"center"}} > 
        <Typography sx={{fontSize:"1.2rem"}}> Recent Post </Typography>
        <Link to='myFood' style={{textDecoration:"none",color :"transparent"}}>  
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
      <Slider {...settings}>  
          < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
          < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
          < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
          < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
          </Slider>
  </>
)
}

export default ShopTab