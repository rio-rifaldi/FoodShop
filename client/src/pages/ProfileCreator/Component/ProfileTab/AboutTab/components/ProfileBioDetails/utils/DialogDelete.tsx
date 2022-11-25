import { gql, useMutation } from '@apollo/client'
import { Warning } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel, Stack, TextField } from '@mui/material'
import { StateValueContext } from 'Common/ContextApi'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Props = {
    isDeleteOpen : boolean,
    username : string | undefined,
    setClose : () => void
}

const DeleteQuery = gql`
    mutation deleteAccout{
         DeteleUser
    }
`

const DialogDelete = (props: Props) => {
    const {watch,register,reset} = useForm()
    const {dispatch} = useContext(StateValueContext)
    const [Delete,{data,error,loading}] = useMutation(DeleteQuery)
    const navigate = useNavigate()
        const isUsername = watch() 
        console.log(isUsername,"dari dialog delete" );

        const onClickDelete = async () =>{
            try {
                await Delete()
                if(error) throw Error
                
                
                props.setClose()
                reset()
                dispatch({type:"IS_LOGINED",payload:false})
                navigate('/home')
                
            } catch (err) {
                    console.log(err);
            }
            
        } 
  return (
    <Dialog open={props.isDeleteOpen} onClose={props.setClose} > 
        <DialogTitle > Are You Sure Delete {props.username}'s Account?  </DialogTitle>
          <DialogContent > 
                <DialogContentText sx={{color:"myColor.redJambu",mb:1}}>
                < Warning color='warning' sx={{marginRight:"1rem"}}/>
                all of your information including product and blog
                </DialogContentText>

            <InputLabel htmlFor='username' shrink> please type username for delete confirmation! </InputLabel>
            < TextField
                placeholder='username'
                required
                fullWidth
                id='username'
                {...register('username')}
                size='small'
            />
            
         </DialogContent>
         <DialogActions > 
            <Stack direction={'row'} gap={2}> 
                <Button variant='contained' size='small' onClick={props.setClose}> cancel  </Button>
                <Button variant='contained' size='small' color='error' 
                    disabled={isUsername.username  === props.username ? false : true}
                    onClick={onClickDelete}
                > Delete  </Button>
             </Stack>    
         </DialogActions>

    </Dialog>
  )
}

export default DialogDelete