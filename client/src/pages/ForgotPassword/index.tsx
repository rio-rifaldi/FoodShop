import { EnhancedEncryption, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Fab, IconButton, TextField, Typography } from '@mui/material'
import ForgotPasswordImage from 'assets/images/svg/forgot.svg'
import { useRef, useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import Github from 'assets/icon/svgIcon/Github'
import Google from 'assets/icon/svgIcon/Google'
import Microsoft from 'assets/icon/svgIcon/Microsoft'



const useStyles = makeStyles() ((theme) =>{
    return{
        mainContainer :{
          display :"flex",
          flexDirection :"column",
          alignItems :"center",
          margin :"1.5rem 0",
          [theme.breakpoints.up('md')]:{
            height :"80vh",
            flexDirection :"row",
            justifyContent :"space-evenly",
           
          }
        },
        boxForgotPassword :{
          width:"100%",
          padding:"1rem 2rem",
          maxWidth :"33rem",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
  
        },
        form:{
          display :"flex",
          flexDirection : "column",
          gap : "1.4rem",
        },
        boxRegister :{
          display: "flex",
          justifyContent :"space-between",
          "& > a": {
            textDecoration :"none",
            color :theme.palette.neutrals.black,
            "&:hover":{
              color :"#551A8B"
            }
          }
        },
        ForgotPasswordImage :{
          margin :" 0 auto",
          display :"block",
          maxWidth :"35rem",
          [theme.breakpoints.up('md')]:{
            margin :0,
            maxWidth :"35rem",
          }
        },
        ForgotPasswordTitle :{
          fontFamily : "Alice",
          fontWeight :"600",
          textAlign:"center",
          color : theme.palette.neutrals.black,
          margin :'1rem 0',
          fontSize :"2.3rem " ,
          display :"none",
          [theme.breakpoints.up('md')]:{
            display :"block"
          }
        },
        ForgotPasswordTitleMobile :{
          fontFamily : "Alice",
          fontWeight :"600",
          textAlign:"center",
          color : theme.palette.neutrals.black,
          fontSize :"2.3rem ",
          [theme.breakpoints.up('md')]:{
            display :"none"
          }
        },
        textField :{
          paddingLeft :"1.2rem",
          padding :",5rem"
        },
        wrapForgotPasswordWith :{
          display :"flex",
          flexDirection : "column",
          gap :'1rem',
          "& > button":{
            width :"100%",
          },
          [theme.breakpoints.up('smBlog')]:{
            flexDirection :"row",
            gap :"1.5rem"
          }
        },
        fab :{
          boxShadow: "rgba(0, 0, 0, 0.13) 0px 3px 5px",
          backgroundColor : "white",
          borderRadius :" .4rem",
          textTransform :"capitalize"

        },
        textForgotPasswordWith :{
          fontFamily : "Alice",
          fontWeight :"500",
          textAlign:"center",
          color : theme.palette.neutrals.black,

      },
      textDescription :{
        fontFamily : "Alice",
        fontWeight :"500",
        color : theme.palette.neutrals.grey,
        margin:'1rem 0'
      }
 
    }

})
const ForgotPasswordPage = () => {
  const {classes} = useStyles()
  const [isHidden, setIsHidden] = useState(false);
  const inputPassword = useRef<HTMLInputElement>(null)
  const changeVisibility = () =>{
    setIsHidden( prev => !prev)
    if(inputPassword.current != undefined){
      inputPassword.current.type = isHidden ? "password" : "text"
    }

  } 
  return (
    <>
       <Typography component={'h1'}  className={classes.ForgotPasswordTitleMobile}>Forgot Password </Typography >  
    <Box className={classes.mainContainer}> 
         
          <img src={ForgotPasswordImage} alt="ForgotPassword image" className={classes.ForgotPasswordImage}  />  
         <Box className={classes.boxForgotPassword}> 
            <Typography component={'h1'}  className={classes.ForgotPasswordTitle}>Forgot Password </Typography >  

            <Typography className={classes.textDescription}>please tell me your remembered password or email</Typography>
            <Box component={'form'} autoComplete='off' className={classes.form}> 

                < TextField
                placeholder='Username'

                id='username'
                variant='standard'
                InputProps={{
                  startAdornment : (< Person color={"action"} />)
                }}
                inputProps={{className:classes.textField}}

                 />
                 
             
                < TextField
                placeholder='Password'
           
                id='Password'
                type={'password'}
                variant='standard'
                InputProps={{
                  startAdornment : (< EnhancedEncryption color={"action"}  />),
                  endAdornment : (
                    <IconButton onClick={changeVisibility}> 
                       {
                        isHidden ? (
                          < Visibility />
                        ):(
                          < VisibilityOff />
                        )
                       }
                     </IconButton>
                  )
                }}
                  inputRef={inputPassword}
                  inputProps={{className :classes.textField}}
                 />

      
                <Button variant='contained' color='secondary' sx={{textTransform:"capitalize"}}> Sumbit </Button>
                <Typography className={classes.textForgotPasswordWith}> -- Or Register With -- </Typography>
                 <Box className={classes.wrapForgotPasswordWith} > 
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
     </Box>
    </>
  )
}

export default ForgotPasswordPage