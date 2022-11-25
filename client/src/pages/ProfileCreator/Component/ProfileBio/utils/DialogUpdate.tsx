import { ApolloQueryResult, gql, OperationVariables, useMutation } from '@apollo/client'
import { AccountCircle, Email, LockPerson, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'
import { userType } from '..'

type outputForm = {
    email : string,
    firstName : string,
    lastName: string
    password : string
    username : string
}
const queryUpdate = gql`
    mutation updateUserAuth($input: UserInputAuth!){
    updateUserAuth(input: $input) {
    username
  }
}
    `

type Props = {
    setClose : React.Dispatch<React.SetStateAction<boolean>>,
    open : boolean,
}

const DialogUpdate = (props: Props) => {
    const {register,handleSubmit,reset} = useForm<outputForm>()
    const [Update] = useMutation(queryUpdate)
    const [isOpenPassword, setIsOpenPassword] = useState(false)
    const dataUser = useRecoilValue(refetchState)    
    let data = dataUser?.data


    const onSubmitUpdate = handleSubmit((data,e) =>{
        e?.preventDefault()

        Update({
            variables :{
                input : data
            }
        }).then((result) =>{
            if(result.data?.updateUserAuth.username){
                props.setClose(false)
                reset()
                dataUser?.refetch()
            }
        } )
    } )
  return (
    <Dialog open={props.open} onClose={() => props.setClose(false)}>

    <DialogTitle > Account Preference </DialogTitle>    
    <Box component={'form'} onSubmit={onSubmitUpdate}> 
    <DialogContent > 

        <Box  sx={{display:{smMenu:"flex"},gap:{smMenu:".7rem"}}} > 
                <Box sx={{width:"100%"}} > 
                    <InputLabel shrink> firstName  </InputLabel>
                    < TextField
                        required
                        fullWidth
                        {...register('firstName')}
                        size='small'
                        placeholder='firstName'
                        defaultValue={data?.getUser.firstName}
                    />
                </Box>
                <Box sx={{width:"100%"}} > 
                    <InputLabel shrink> lastName  </InputLabel>
                    < TextField
                        required
                        fullWidth
                        {...register('lastName')}
                        size='small'
                        placeholder='lastName'
                        defaultValue={data?.getUser.lastName}
                    />
                </Box>
         </Box>
         <InputLabel shrink> username  </InputLabel>
        < TextField
            required
            fullWidth
            {...register('username')}
            size='small'
            InputProps={{
                startAdornment : < AccountCircle  sx={{marginRight:".7rem"}} />
            }}
            placeholder='username'
            defaultValue={data?.getUser.username}
        />
         <InputLabel shrink> email  </InputLabel>
        < TextField
            required
            fullWidth
            {...register('email')}
            size='small'
            InputProps={{
                startAdornment : < Email sx={{marginRight:".7rem"}}/>
                
            }}
            placeholder='email'
            defaultValue={data?.getUser.email}
        />
         <InputLabel shrink> password  </InputLabel>
        < TextField
            required
            fullWidth
            type={isOpenPassword ? "text" :  'password'}
            {...register('password')}
            size='small'
            InputProps={{
                startAdornment : < LockPerson  sx={{marginRight:".7rem"}}/>,
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
            placeholder='password'
      
        />
         
         </DialogContent>
         <DialogActions > 
                <Button variant='contained' size="small" type='reset' >  reset</Button>    
                <Button variant='contained' size="small" color="secondary" type='submit'> Update  </Button>    
            </DialogActions>
    
     </Box>
    </Dialog>
  )
}

export default DialogUpdate