import React, { useState } from 'react'
import profilling from 'assets/images/svg/profilling.svg'
import { makeStyles } from 'tss-react/mui'
import { Box, Button, Typography } from '@mui/material'
import DialogAdd from 'pages/ProfileCreator/Component/ProfileBio/utils/DialogAdd'
import useStyles from './Style'
import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { userType } from 'pages/ProfileCreator/Component/ProfileBio'
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