import { ApolloQueryResult, gql, OperationVariables, useMutation } from '@apollo/client'
import { Close, DeleteForever, Edit, PhotoCamera } from '@mui/icons-material'
import { Dialog, DialogContent, DialogContentText, DialogTitle, Fab, IconButton, Stack } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'
import { userType } from '..'

type Props = {
    open:boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const QueryImageAdd = gql`
    mutation addImageProfile($file: Upload!){
    addImageProfile(file: $file) {
        secureUrl
        url
    }
}
`
const QueryImageDelete = gql`
    mutation deleteImageProfile{
    deleteImageProfile
    }
`
const QueryImageUpdate = gql`
    mutation updateImageProfile($file: Upload!){
    updateImageProfile(file: $file) {
        url
        secureUrl
    }
}
`

const DialogSetImageProfile = (props: Props) => {
    
    const dataUser= useRecoilValue(refetchState)
    
        let data = dataUser?.data
    const onSelectFileAdd = async (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files !== null){
            const file = e.target.files[0]
            console.log(file);
            const result = await AddImage({variables:{file : file}}) 
            
            if(result.data){
                dataUser?.refetch()
                props.setOpen(false)
            }
    
        }
        } 
        const onSelectFileUpdate = async (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files !== null){
            const file = e.target.files[0]
            const result = await UpdateImage({variables:{file : file}}) 
            
            if(result.data){
                dataUser?.refetch()
                props.setOpen(false)
            }
    
        }
        } 
        
        const onClickImageDelete = async () =>{
            const result = await DeleteImage()
            if(result.data?.deleteImageProfile === true){
                dataUser?.refetch()
                props.setOpen(false)
            }
        }
    const [AddImage] = useMutation(QueryImageAdd)
    const [DeleteImage] = useMutation(QueryImageDelete)
    const [UpdateImage] = useMutation(QueryImageUpdate)
  return (
    <Dialog open={props.open} onClose={() => props.setOpen(false)} PaperProps={{ sx: {position:"relative"}}} scroll={'body'} > 
            <IconButton sx={{width : "max-content",position:"absolute",right :".5rem",top:".5rem"}} onClick={() => props.setOpen(false)}> 
                < Close />
            </IconButton> 
        <DialogTitle > Set Image </DialogTitle>
        <DialogContent > 
            <DialogContentText > set image profile as you want </DialogContentText>
            
            <Stack spacing={4} direction={'row'} justifyContent={'center'}  my={3}> 
                <Fab 
                aria-label="upload picture"
                component="label"
                disabled={  data?.getUser?.profileImage?.url === "" ? false : true}
                > 
                <input type="file" hidden onChange={onSelectFileAdd} />
                < PhotoCamera /> 
                </Fab>
                <Fab 
                    disabled={  data?.getUser?.profileImage?.url === "" ? true : false}
                    aria-label="update picture"
                    component="label"
                    > 
                
                    <input type="file" hidden onChange={(e) => onSelectFileUpdate(e)} />
                < Edit /> 
                </Fab>
                <Fab 
                    disabled={  data?.getUser?.profileImage?.url === "" ? true : false}
                    onClick={onClickImageDelete}
                > 
                < DeleteForever /> 
                </Fab>
                
            </Stack>
            
        </DialogContent>

</Dialog>
  )
}

export default DialogSetImageProfile