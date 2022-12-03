import { Box, Typography } from '@mui/material';
import useStyles from './Style';



function Head() {
    const {classes,theme} = useStyles();
  return (
    <Box className={classes.mainContainer} mt={10}> 
        <Box sx={{maxWidth : "40rem",margin : "0 auto 1.3rem auto",textAlign: "center"}}  >
        <Typography component='h1' className={classes.title}>Our 
            <Typography component='span' className={classes.titleMark}>  blogs</Typography> 
            </Typography>

        <Typography className={classes.subTitle} >Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes. </Typography>
        </Box>
        

     </Box>
  )
}

export default Head