import { ApolloQueryResult, gql, OperationVariables, useMutation } from '@apollo/client'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userType } from '..'
import DialogUpdate from './DialogUpdate'

const queryVerify = gql`

    mutation verifyUserUpdate($password: String!){
    VerifyUserUpdate(password: $password)
    }
`
type verify = {
    password : string,
}


type Props = {
    isOpenDialog : boolean,
    setIsOpenDialog :React.Dispatch<React.SetStateAction<boolean>>
}

const DialogVerfy = (props: Props) => {
    const [isOpenPassword, setIsOpenPassword] = useState(false)
    const {register,handleSubmit,reset} = useForm<verify>()
    const [verifyUser,{error,reset:resetMutation}]  = useMutation(queryVerify)
    const [isOpenDialogUpdateAccount, setisOpenDialogUpdateAccount] = useState(false)


    const onSubmitVerify = handleSubmit(async ({password},e) =>{
        e?.preventDefault()

        reset()
        verifyUser({
            variables :{
                password
            }
        }).then((result) =>{
            if(result.data?.VerifyUserUpdate === true){
                props.setIsOpenDialog(false)
                setisOpenDialogUpdateAccount(true)
            }
        } ).catch((err) => console.log(err))

        
    } )

    const oncloseVerify = () => {
        props.setIsOpenDialog(false);
        resetMutation()
        reset()
    }

  return (
    <>
       < DialogUpdate setClose={setisOpenDialogUpdateAccount} open={isOpenDialogUpdateAccount}/>
         <Dialog open={props.isOpenDialog} onClose={oncloseVerify} >
         <Box component={'form'} onSubmit={onSubmitVerify}> 
            <DialogTitle > Access Password !!! </DialogTitle>
            <DialogContent > 
                <DialogContentText my={2} > please type your Password for verfy </DialogContentText>

                    <InputLabel shrink htmlFor='password'> Password : </InputLabel>
                    < TextField 
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
                    />
                    
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