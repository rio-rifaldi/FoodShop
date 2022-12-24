import { Close, Warning } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import { useState } from 'react'
import SnackbarAlert from '../SnackbarAlert'

type Props = {
    onOpen: () => void,
    onClose: () => void,
    isOpen:boolean
}

const DialogConfirm = ({isOpen,onClose,onOpen}: Props) => {
    const [open, setOpen] = useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false)
    }

    const handleClick = () => {
      setOpen(true);
    };

    const onAccepted = () => {
        onClose()
        handleClick()
    }

  return (
    <>
    <SnackbarAlert handleClose={handleClose} open={open}> 
        this is message sucsess
     </SnackbarAlert>

        <Dialog open={isOpen} scroll="body" onClose={onClose}
        PaperProps={{
            sx : {position :"relative",height :"max-content"}
        }} 
    > 
        <IconButton sx={{width : "max-content",position:"absolute",right :".5rem",top:".5rem"}} onClick={onClose}> 
                < Close />
        </IconButton> 
        <DialogTitle > Are you sure accepted food? </DialogTitle>
        <DialogContent > 
            <DialogContentText color="#d32f2f" fontSize={".95rem"} > 
                < Warning fontSize='small' sx={{mr:1,transform:"translateY(.2rem)"}} color="error" />    
                after you klik this button, you really accept the food
            </DialogContentText>
        </DialogContent>
        <DialogActions  sx={{display:"flex",gap:".5rem",justifyContent:"flex-end"}}> 
            <Button variant="contained" color="secondary" size="small" onClick={onAccepted}> Accept </Button>
            <Button variant="contained" color="error" size="small"
            onClick={onClose}> Decline </Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default DialogConfirm