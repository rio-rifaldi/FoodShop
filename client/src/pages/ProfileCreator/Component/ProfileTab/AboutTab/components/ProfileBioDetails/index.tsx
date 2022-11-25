import { gql, useQuery } from '@apollo/client'
import { Edit, Report } from '@mui/icons-material'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'
import useStyles from './Style'
import DialogDelete from './utils/DialogDelete'
import DialogUpdate from './utils/DialogUpdate'

type Props = {

    
}


const ProfileBioDetails = (props: Props) => {

    const user = useRecoilValue(refetchState)
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
    const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false)
    const {classes} = useStyles()
    let data = user?.data
    let loading = user?.loading


    const setOpen = () => setIsDeleteOpen(true);
    
    console.log(data,"profile")

    const setClose = () => setIsDeleteOpen(false) 

    const setCloseUpdate = () =>   setIsUpdateOpen(false)
    
    const setOpenUpdate = () => setIsUpdateOpen(true)
    
    return (

        <>
            < DialogDelete isDeleteOpen={isDeleteOpen} username={loading ? "": data?.getUser.username} setClose={setClose}/>  
            < DialogUpdate handleClose={setCloseUpdate}  isOpen={isUpdateOpen}  />

            <Box className={classes.boxContainer}> 
                    <Box className={classes.boxField}> 
                        <Typography className={classes.titleField} > Name </Typography>    
                        <Typography className={classes.valueField} > {!loading ? data?.getUser.firstName + " " + data?.getUser.lastName : "...."}</Typography>
                    </Box>
                        < Divider />
      
                    <Box className={classes.boxField} my=".9rem"> 
                        <Typography className={classes.titleField} > Username </Typography>    
                        <Typography className={classes.valueField} > {!loading ? data?.getUser.username : "..."} </Typography>
                        </Box>
                        < Divider />

                    <Box className={classes.boxField} my=".9rem"> 
                        <Typography className={classes.titleField} > Email </Typography>    
                        <Typography  className={classes.valueField}  >{!loading ? data?.getUser.email : "..."} </Typography>
                        </Box>
                        < Divider />

                    <Box className={classes.boxField} my=".9rem"> 
                        <Typography className={classes.titleField}  > Phone number </Typography>    
                        <Typography className={classes.valueField} > {!loading? data?.getUser.numberTelp : "..."}  </Typography>
                        </Box>
                        < Divider />

                    <Box  className={classes.boxField} my=".9rem"> 
                        <Typography className={classes.titleField} > Birth Day </Typography>    
                        <Typography className={classes.valueField} > {!loading ? data?.getUser.birthDay : "..."}  </Typography>
                </Box>
                        < Divider />
                        
                    <Box className={classes.boxField} my=".9rem"> 
                        <Typography className={classes.titleField} > Country </Typography>    
                        <Typography className={classes.valueField} > {!loading ? data?.getUser.country : "..."}  </Typography>
                </Box>
                        < Divider />
                        
                    <Box sx={{margin:".9rem 0"}}> 
                        <Typography className={classes.titleField}  > Address </Typography>    
                        <Typography className={classes.valueField} >{!loading ? data?.getUser.address : "..."} </Typography>
                        </Box>
                        < Divider />

                    <Stack direction={'row'} gap='1rem' mt={3} justifyContent='flex-end'> 
                            <Button variant='text' size='small' startIcon={<Edit/>} onClick={setOpenUpdate}> Update  </Button>
                            <Button  size='small' startIcon={<Report/>} color='error' onClick={setOpen} > Delete Account  </Button>

                        </Stack>
            </Box>  
        </>

    )
}

export default ProfileBioDetails