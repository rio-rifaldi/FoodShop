import { Box, Button, Stack, Typography } from '@mui/material'
import profilling from 'assets/images/svg/profilling.svg'
import DialogAdd from 'pages/ProfileCreator/Component/ProfileBio/utils/DialogAdd'
import { useState } from 'react'
import useStyles from './Style'

interface Props {
  delete :{
    setOpen: () => void;
}
}



const EmptyBioDetails = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleClose = () =>{
      setIsOpen(false)
  } 
  const handleOpen = () => {
      setIsOpen(true)
  }
  const {setOpen} = props.delete
  const {classes} = useStyles()
  return (
    <>
    <Box className={classes.container}>
          <img src={profilling} alt="image profilling" className={classes.image}/>
          <Typography className={classes.text} > please fiil Bio detail </Typography>
          <Stack direction="row" gap={'.3rem'} justifyContent='center'> 
            <Button variant='outlined' color='secondary' size='small'  onClick={handleOpen}>  fill </Button>
            
            <Button  size='small' variant='outlined'  color='error' onClick={setOpen} > Delete Account  </Button>
           </Stack>
      </Box>
      < DialogAdd handleClose={handleClose} isOpen={isOpen} />
    </>
  )
}

export default EmptyBioDetails