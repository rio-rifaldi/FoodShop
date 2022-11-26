import { ApolloError, MutationResult } from '@apollo/client';
import { EnhancedEncryption, Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField, Typography } from '@mui/material';
import useStyles from 'pages/Login/Style';
import React, { useRef, useState } from 'react'

type Props = {
    error ?: ApolloError | undefined,
    register : any
}

const PasswordField = ({error,register}: Props) => {
    const [isHidden, setIsHidden] = useState(false);
    const inputPassword = useRef<HTMLInputElement>(null)
    const {classes} = useStyles()
    const changeVisibility = () =>{
        setIsHidden( prev => !prev)
        if(inputPassword.current != undefined){
          inputPassword.current.type = isHidden ? "password" : "text"
        }
    
      } 
  return (
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
  )
}

export default PasswordField