import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel } from '@mui/material'
import { Box } from '@mui/system'
import PasswordField from 'Common/reusableComponent/PasswordField'
import useVerfyUser from 'pages/ProfileCreator/Utils/Hooks/useVerfyUser'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import DialogUpdate from './DialogUpdate'


type verify = {
    password : string,
}

type Props = {
    isOpenDialog : boolean,
    setIsOpenDialog :React.Dispatch<React.SetStateAction<boolean>>
}

const DialogVerfy = ({isOpenDialog,setIsOpenDialog}: Props) => {
    const {register,handleSubmit,reset} = useForm<verify>()
    const [isOpenDialogUpdateAccount, setisOpenDialogUpdateAccount] = useState(false)
    const onClose = () => setisOpenDialogUpdateAccount(false)
    const onOpen = () => setisOpenDialogUpdateAccount(true)
    const {error,onVerify,resetMutation} = useVerfyUser({onOpen,setIsOpenDialog,reset})

    const onSubmitVerify = handleSubmit(onVerify)

    const oncloseVerify = () => {
        setIsOpenDialog(false);
        resetMutation()
        reset()
    }

  return (
    <>
       < DialogUpdate setClose={setisOpenDialogUpdateAccount} open={isOpenDialogUpdateAccount}/>
         <Dialog open={isOpenDialog} onClose={oncloseVerify} >
         <Box component={'form'} onSubmit={onSubmitVerify}> 
            <DialogTitle > Access Password !!! </DialogTitle>
            <DialogContent > 
                <DialogContentText my={2} > please type your Password for verfy </DialogContentText>

                    <InputLabel shrink htmlFor='password'> Password : </InputLabel>
                    < PasswordField register={register} error={error} variant="outlined"/>
                    {/* < TextField 
                        placeholder='password'
                        size='small'
                        id='password'
                        type={isOpenPassword ? "text" :  'password'}
                        fullWidth
                        required
                        {...register("password")}
                        error={error ? true : false}
                        helperText={error ? error.message : ""}
                        InputProps={{
                            endAdornment : (
                                <IconButton onClick={() => setIsOpenPassword((prev) => !prev)}> 
                                {
                                    isOpenPassword ? (
                                        < Visibility />            
                                    ):(
                                        < VisibilityOff />   
                                    )
                                }
                                </IconButton>
                            )
                        }}
                    /> */}
                    
            </DialogContent>
            <DialogActions > 
                <Button variant='contained' size="small" type='reset' >  reset</Button>    
                <Button variant='contained' size="small" color="secondary" type='submit'> Verify  </Button>    
            </DialogActions>
               </Box>
        </Dialog>
    </>
  )
}

export default DialogVerfy