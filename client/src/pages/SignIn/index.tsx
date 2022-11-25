import { Box, Typography } from '@mui/material'
import signInImage from 'assets/images/svg/signing-terms-of-services.svg'
import FormRegistration from './Components/FormRegistration'
import useStyles from './Style'







const SignIn = () => {
  const {classes} = useStyles()
  return (
    <>
       <Typography component={'h1'}  className={classes.SignInTitleMobile}>Sign In </Typography >  
    <Box className={classes.mainContainer}> 
         
          <img src={signInImage} alt="SignIn image" className={classes.SignInImage}  />  
         <Box className={classes.boxSignIn}> 
            <Typography component={'h1'}  className={classes.SignInTitle}>Sign In </Typography >  

            < FormRegistration />

         </Box>
     </Box>
    </>
  )
}

export default SignIn