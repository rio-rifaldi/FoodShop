import { useMutation } from '@apollo/client'
import { Bookmark, BookmarkBorder, EnhancedEncryption, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Checkbox, Fab, FormControlLabel, IconButton, TextField, Typography } from '@mui/material'
import Github from 'assets/icon/svgIcon/Github'
import Google from 'assets/icon/svgIcon/Google'
import Microsoft from 'assets/icon/svgIcon/Microsoft'
import loginImage from 'assets/images/svg/robot-checking-user-profile.svg'
import { StateValueContext } from 'Common/ContextApi'
import { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useStyles from './Style'
import { LOGIN } from './Utils/Graphql'
import { returnType } from './Utils/Interfaces'




const Login = () => {
  const {classes} = useStyles()
  const [isHidden, setIsHidden] = useState(false);
  const [login,{data:dataLogin,error}] = useMutation(LOGIN)
  const {reset,register,handleSubmit} = useForm<returnType>()
  const navigate = useNavigate()
  const inputPassword = useRef<HTMLInputElement>(null)
  const {dispatch} = useContext(StateValueContext)
  const changeVisibility = () =>{
    setIsHidden( prev => !prev)
    if(inputPassword.current != undefined){
      inputPassword.current.type = isHidden ? "password" : "text"
    }

  } 

  const onSubmitForm = handleSubmit(async (data,e) =>{
    e?.preventDefault()
    const dataUser = {
      username : data.username,
      password : data.password
    }
    try {
      const result = await login({
        variables :{
          loginInput : dataUser
        }
      })

      console.log(result);
      if(result){
        dispatch({type:"IS_LOGINED",payload:true})
        navigate('/home')
      }
      reset()
    } catch (e) {
      console.log(error?.message);
   
    }
    
  } )
  return (
    <>
       <Typography component={'h1'}  className={classes.loginTitleMobile}>Login </Typography >  
    <Box className={classes.mainContainer}> 
         
          <img src={loginImage} alt="login image" className={classes.loginImage}  />  
         <Box className={classes.boxLogin}> 
            <Typography component={'h1'}  className={classes.loginTitle}>Login </Typography >  
            <Box component={'form'} autoComplete='off' className={classes.form} onSubmit={onSubmitForm}> 

                < TextField
                placeholder='Username'
                {...register('username')}
                required
                id='username'
                error={ error ? true : false}
                variant='standard'
                InputProps={{
                  startAdornment : (< Person color={"action"} />)
                }}
                inputProps={{className:classes.textField}}

                 />
                 
             
                < TextField
                placeholder='Password'
                {...register('password')}
                required
                id='Password'
                type={'password'}
                error={ error ? true : false}
                helperText={
                  error &&(
                    <Typography component={'span'} sx={{fontSize:".9rem"}}> {error.message}  </Typography>
                  )
                }
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
                 < FormControlLabel
                  value={''}
                  control={< Checkbox size='small' sx={{color : "myColor.green"}} className={classes.checkbox} 
                  icon={< BookmarkBorder />}
                  checkedIcon={< Bookmark color={'secondary'}/>}
                  />}
                  label="remember Me"
                  labelPlacement='end'
                 />
      
                <Button variant='contained' color='secondary' type='submit'> Login </Button>

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
     </Box>
    </>
  )
}

export default Login