import { useMutation } from '@apollo/client'
import { AccountCircle, Bookmark, BookmarkBorder, Email, EnhancedEncryption, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Checkbox, Fab, FormControlLabel, IconButton, TextField, Typography } from '@mui/material'
import Github from 'assets/icon/svgIcon/Github'
import Google from 'assets/icon/svgIcon/Google'
import Microsoft from 'assets/icon/svgIcon/Microsoft'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useStyles from '../Style'
import SIGN_IN from '../Utils/Graphql/CreateUser'
import { SignInI } from '../Utils/Types/Index'

type Props = {}

const FormRegistration = (props: Props) => {
    const [isHiddenPassword, setIsHiddenPassword] = useState(false); 
    const PasswordRef = useRef<HTMLInputElement>(null) 
    const {register,handleSubmit,reset} = useForm<SignInI>()
    const [signIn] = useMutation(SIGN_IN)
    const navigate = useNavigate()
    const {classes} = useStyles()


    const onSubmitForm = handleSubmit(async (data,e) =>{
        e?.preventDefault()
        const dataUser = {
          firstName : data.firstName,
          lastName : data.lastName,
          username : data.username,
          email : data.email,
          password : data.password
        }
        const result = await signIn({
          variables:{
            input : dataUser
          }
        })
        reset()
        if(result) navigate('/login')
      } )


    const changeVisibilityPassword = () =>{
        setIsHiddenPassword( prev => !prev)
        if(PasswordRef.current != undefined){
        PasswordRef.current.type = isHiddenPassword ? "password" : "text"
        }
    } 

  return (
    
    <Box component={'form'} autoComplete='off' className={classes.form} onSubmit={onSubmitForm }> 

            <Box className={classes.names} > 
                    < TextField
                    placeholder='firstName'
                    id='firstName'
                    variant='standard'
                    required
                    InputProps={{
                    startAdornment : (< Person color={"action"} />)
                    }}
                    inputProps={{className:classes.textField}}
                    {...register("firstName")}
                    />

                    < TextField
                    placeholder='lastName'
                    id='lastName'
                    variant='standard'
                    required
                    InputProps={{
                    startAdornment : (< Person color={"action"} />)
                    }}
                    inputProps={{className:classes.textField}}
                    {...register("lastName")}
                    />

            </Box>

            < TextField
            placeholder='Username'
            id='username'
            variant='standard'
            required
            InputProps={{
            startAdornment : (< AccountCircle color={"action"} />)
            }}
            inputProps={{className:classes.textField}}
            {...register("username")}
            />

            < TextField
            placeholder='Email'
            id='email'
            variant='standard'
            type={'email'}
            InputProps={{
            startAdornment : (< Email color={"action"} />)
            }}
            inputProps={{className:classes.textField}}
            {...register('email')}
            required

            />

            < TextField
            placeholder='Password'
            id='Password'
            type={'password'}
            variant='standard'
            {...register('password')}
            InputProps={{
            startAdornment : (< EnhancedEncryption color={"action"}  />),
            endAdornment : (
                <IconButton onClick={changeVisibilityPassword}> 
                {
                    isHiddenPassword ? (
                    < Visibility />
                    ):(
                    < VisibilityOff />
                    )
                }
                </IconButton>
            )
            }}
            inputRef={PasswordRef}
            inputProps={{className :classes.textField}}
            required
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

            <Button variant='contained' color='secondary' type='submit'> SignIn </Button>

            <Typography className={classes.textSignInWith}> -- Or SignIn With -- </Typography>
            <Box className={classes.wrapSignInWith} > 
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

  )
}

export default FormRegistration