import { DeleteOutline } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import DeleteProduct from './DeleteProduct'

type Props = {
    id : string | undefined,
    onClose : () => void,
    isOpen : boolean,
    name : string
}

const DeleteConfirm = ({onClose,id,isOpen,name}: Props) => {
  const {deleteProduct,loading}  = DeleteProduct({onClose,id})

  return (
    <Dialog  open={isOpen} onClose={onClose} >  
        <DialogTitle > Are you sure? </DialogTitle>
        <DialogContent > 
          <DialogContentText > are you sure want to delete {name} Product ? </DialogContentText>  
        </DialogContent>
        <  DialogActions  > 
            <Button variant ='contained' size='small' onClick={onClose} > cancel</Button>
            <LoadingButton variant ='contained' size='small' color='error' 
            startIcon={<DeleteOutline/>}
            loading={loading ? true : false}
            onClick={deleteProduct} 
            > Delete</LoadingButton>
        </DialogActions>
      </Dialog>
  )
}

export default DeleteConfirm