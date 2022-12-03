import { Box, Typography, useTheme } from '@mui/material';
import FindByUserInterface from '../FindByUserInterface';
import useStyles from './Style';



function MainMenu() {
  const {classes}  = useStyles()



  return (
    <>
    <Box mt={10}>   
    <Box sx={{maxWidth : "40rem",margin : "0 auto 1.3rem auto",textAlign: "center"}}  >
            <Typography component='h1' className={classes.title}>Get  
               <Typography component='span' className={classes.titleMark}>  special</Typography> Meal
             </Typography>

            <Typography className={classes.subTitle} >Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes. </Typography>
        </Box>

     </Box>
        < FindByUserInterface  />


  </>
        )
      }


export default MainMenu