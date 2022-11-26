import { Box, Fab, Typography } from '@mui/material'
import Github from 'assets/icon/svgIcon/Github'
import Google from 'assets/icon/svgIcon/Google'
import Microsoft from 'assets/icon/svgIcon/Microsoft'
import loginImage from 'assets/images/svg/robot-checking-user-profile.svg'
import { Link } from 'react-router-dom'
import useStyles from './Style'
import FormLogin from './Utils/Components/FormLogin'




const Login = () => {
  const {classes} = useStyles()



  return (
    <>
       <Typography component={'h1'}  className={classes.loginTitleMobile}>Login </Typography >  
    <Box className={classes.mainContainer}> 
         
          <img src={loginImage} alt="login image" className={classes.loginImage}  />  
         <Box className={classes.boxLogin}> 
            <Typography component={'h1'}  className={classes.loginTitle}>Login </Typography >  
            < FormLogin />

                <Box className={classes.boxRegister} > 
                    <Link to={'/register'}> Register  </Link> 
                    <Link to={"/forgot"}> Forgot PassWord</Link>
                 </Box>
                 <Typography className={classes.textLoginWith}> -- Or Login With -- </Typography>
                 <Box className={classes.wrapLoginWith} > 
                    <Fab variant='extended' size='medium' className={classes.fab} > 
                        < Google svgProps={{style : {marginRight : ".6rem",width:"1rem"}}}/>
                        Google
                     </Fab>
                    <Fab variant='extended' size='medium' className={classes.fab}  > 
                        < Github svgProps={{style : {marginRight : ".6rem",width:"1rem"}}}/>
                        Github
                     </Fab>
                    <Fab variant='extended' size='medium' className={classes.fab} > 
                        < Microsoft svgProps={{style : {marginRight : ".6rem",width:"1.3rem"}}}/>
                        Microsoft
                     </Fab>
                  </Box>

         </Box>
     </Box>
    </>
  )
}

export default Login