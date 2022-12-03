import { Box, Button, Typography } from '@mui/material'
import profilling from 'assets/images/svg/profilling.svg'
import DialogAdd from 'pages/ProfileCreator/Component/ProfileBio/utils/DialogAdd'
import { useState } from 'react'
import useStyles from './Style'
type Props = {

}



const EmptyBioDetails = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleClose = () =>{
      setIsOpen(false)
  } 
  const handleOpen = () => {
      setIsOpen(true)
  }
  const {classes} = useStyles()
  return (
    <>
    <Box className={classes.container}>
          <img src={profilling} alt="image profilling" className={classes.image}/>
          <Typography className={classes.text} > please fiil Bio detail </Typography>
          <Button variant='outlined' color='secondary' size='small' className={classes.button} onClick={handleOpen}>  fill </Button>
      </Box>
      < DialogAdd handleClose={handleClose} isOpen={isOpen} />
    </>
  )
}

export default EmptyBioDetails