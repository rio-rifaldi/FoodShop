import { Bookmark, BookmarkBorder, EnhancedEncryption, Person, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Checkbox, FormControlLabel, IconButton, TextField, Typography } from '@mui/material';
import useStyles from 'pages/Login/Style';
import { useRef, useState } from 'react';
import UseLogin from '../Hooks/UseLogin';
import PasswordField from './PasswordField';

type Props = {}

const FormLogin = (props: Props) => {
    const {classes} = useStyles()
    const {onSubmitForm,register,result} = UseLogin()
    const error = result.error



  return (

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
        < PasswordField register={register} error={error}/>
 
   


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
 </Box>
  )
}

export default FormLogin