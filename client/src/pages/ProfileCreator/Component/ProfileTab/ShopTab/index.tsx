import { Box, Typography } from '@mui/material'
import topoki from 'assets/images/svg/robot-checking-user-profile.svg'
import SimpleCard from 'Common/reusableComponent/SimpleCard'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import useStyles, { settings } from './Style'
type Props = {}


const ShopTab = (props: Props) => {
  const {classes} = useStyles()

return (
    <>
    <Box className={classes.container} > 
        <Typography sx={{fontSize:"1.2rem"}}> Best seller </Typography>
        <Link to='/myFood' style={{textDecoration:"none",color :"transparent"}}>  
            <Typography className={classes.arrow}> View All </Typography>
        </Link>
     </Box>

          <Slider {...settings}>  
              < SimpleCard creator image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297}  rating={3.5} sold={0} />
              < SimpleCard creator image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297}  rating={3.5} sold={0} />
              < SimpleCard creator image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297}  rating={3.5} sold={0} />
              < SimpleCard creator image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297}  rating={3.5} sold={0} />
              </Slider>

    <Box className={classes.container} mt={6} > 
        <Typography sx={{fontSize:"1.2rem"}}> Recent Post </Typography>
        <Link to='/myFood' style={{textDecoration:"none",color :"transparent"}}>  
            <Typography className={classes.arrow}> View All </Typography>
        </Link>
     </Box>
      <Slider {...settings}>  
          < SimpleCard creator image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297}  rating={3.5} sold={0} />
          < SimpleCard creator image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297}  rating={3.5} sold={0} />
          < SimpleCard creator image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297}  rating={3.5} sold={0} />
          < SimpleCard creator image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297}  rating={3.5} sold={0} />
          </Slider>
  </>
)
}

export default ShopTab