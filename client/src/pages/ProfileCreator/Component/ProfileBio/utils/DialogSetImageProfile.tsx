import { Close, DeleteForever, Edit, PhotoCamera } from '@mui/icons-material'
import { CircularProgress, Dialog, DialogContent, DialogContentText, DialogTitle, Fab, IconButton, Stack } from '@mui/material'
import useAddImageProfile from 'pages/ProfileCreator/Utils/Hooks/useAddImageProfile'
import useDeleteImageProfile from 'pages/ProfileCreator/Utils/Hooks/useDeleteImageProfile'
import useUpdateImageProfile from 'pages/ProfileCreator/Utils/Hooks/useUpdateImageProfile'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'

type Props = {
    open:boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogSetImageProfile = (props: Props) => {
    
       const dataUser= useRecoilValue(refetchState)
        let image = dataUser?.data?.getUser?.profileImage
        const setClose = () => props.setOpen(false)
        const {onAddImage,adding} = useAddImageProfile(setClose)
        const {onDeleteImage} = useDeleteImageProfile(setClose)
        const {onUpdateImage,updating} = useUpdateImageProfile(setClose)
      
  return (
    <Dialog open={props.open} onClose={() => props.setOpen(false)} PaperProps={{ sx: {position:"relative"}}} scroll={'body'} > 
            <IconButton sx={{width : "max-content",position:"absolute",right :".5rem",top:".5rem"}} onClick={() => props.setOpen(false)}> 
                < Close />
            </IconButton> 
        <DialogTitle > Set Image {(updating || adding) &&  < CircularProgress size={20} sx={{ml:1}} />} </DialogTitle>
        <DialogContent > 
            <DialogContentText > set image profile as you want </DialogContentText>
            
            <Stack spacing={4} direction={'row'} justifyContent={'center'}  my={3}> 
                <Fab 
                aria-label="upload picture"
                component="label"
                disabled={  image?.url === "" ? false : true}
                > 
                <input type="file" hidden onChange={onAddImage} />
                < PhotoCamera /> 
                </Fab>
                <Fab 
                    disabled={  image?.url === "" ? true : false}
                    aria-label="update picture"
                    component="label"
                    > 
                    <input type="file" hidden onChange={onUpdateImage} />
                < Edit /> 
                </Fab>
                <Fab 
                    disabled={  image?.url === "" ? true : false}
                    onClick={onDeleteImage}
                > 
                < DeleteForever /> 
                </Fab>        
            </Stack>
        </DialogContent>

</Dialog>
  )
}

export default DialogSetImageProfile