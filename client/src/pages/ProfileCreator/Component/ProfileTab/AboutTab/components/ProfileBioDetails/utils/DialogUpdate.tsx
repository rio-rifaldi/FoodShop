import { Close } from '@mui/icons-material'
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, useMediaQuery } from '@mui/material'
import FormAddMoreBio from './FormUpdate'

type Props = {
    handleClose : () => void,
    isOpen : boolean,
  
}


const DialogUpdate = (props: Props) => {
    const mathes = useMediaQuery('(min-width:400px)')

  return (
    <Dialog open={props.isOpen} onClose={props.handleClose} PaperProps={{
        sx : {position :"relative",width :"93%",height :"max-content"}
    }} scroll={'body'}  fullScreen={mathes ? false : true}  >
        <IconButton sx={{width : "max-content",position:"absolute",right :".5rem",top:".5rem"}} onClick={props.handleClose}> 
                < Close />
         </IconButton> 
     <DialogTitle sx={{fontWeight:"600",textAlign:'center'}}> Add more Detail </DialogTitle> 
       
    <DialogContentText sx={{marginLeft :"1.4rem"}}> please fill more detail about you, so we can know who you are </DialogContentText>
      <DialogContent > 
        < FormAddMoreBio handleClose={props.handleClose} /> 
     </DialogContent>
      </Dialog>
  )
}

export default DialogUpdate