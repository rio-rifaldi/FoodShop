import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { Assessment, Build, LocationOn, PhotoCamera, Shop2 } from '@mui/icons-material'
import { Box, Button, IconButton, Rating, Skeleton, Tooltip, Typography, useMediaQuery } from '@mui/material'
import profileImage from 'assets/images/svg/blank-profile-picture.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'
import useStyles from './Style'
import DialogSetImageProfile from './utils/DialogSetImageProfile'
import DialogVerfy from './utils/DialogVerfy'
import MessageIcon from './utils/MessageIcon'
type Props = {

}

export type userType = {
    getUser : {
        firstName :string,
        lastName :string,
        email : string,
        username: string
        country : string,
        birthDay : string,
        numberTelp : string,
        address :string,
        aboutMe : string,
        profession :string,
        profileImage :{
            url : string,
            secureUrl : string
        }
    },
}


const ProfileBio =  (props: Props) => {
    const match = useMediaQuery("(min-width:430px)")
    const match_300px = useMediaQuery("(min-width:300px)")
    const {classes} = useStyles()
    const [open, setOpen] = useState(false)
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    // const {data,loading} = props
   
      console.count("render")

        const dataUser = useRecoilValue(refetchState);
 
        let data = dataUser?.data 
    
    return (
        <>  
        < DialogSetImageProfile open={open} setOpen={setOpen}  />  

        < DialogVerfy isOpenDialog={isOpenDialog} setIsOpenDialog={setIsOpenDialog}  />
    
   
          <Box className={classes.container} mx={"1.3rem"}>
             <Box className={classes.profileImageWrap} > 
             
                 {
                    (data?.getUser?.profileImage?.url)?(
                        <img src={data?.getUser?.profileImage?.url} alt="avatar profile" className={classes.profileImage}  />
                    ):(
                        <img src={profileImage} alt="avatar profile" className={classes.profileImage}  />
                    )
                 }

                    <IconButton className={classes.iconButtonUpload} onClick={() => setOpen(true)} > 
                        < PhotoCamera sx={{color :"white"}} />
                     </IconButton>
             </Box>
             
            <Box sx={{width:{ xsMenu : "100%", sm:"70%"}}}> 
                <Box className={classes.profileBioWrap} >
                    <Box className={classes.profileNameWrap}> 
               
                        {
                            data?.getUser ?(
                                <Typography className={classes.name}> {`${data?.getUser.firstName} ${data?.getUser.lastName} `} </Typography>  
                                ):(
                                < Skeleton variant='rectangular' width={150} animation='wave'/>
                            )
                        }
                        
                        {
                            data?.getUser ?(
                                <Typography className={classes.address}> < LocationOn className={classes.iconLocation}/> {data?.getUser.country} </Typography>
                                ):(
                                    <Skeleton variant='rectangular' width={60} animation='wave'/>
                                    
                            )
                        }
                  </Box>
                            < MessageIcon />
                    </Box>
                {
                     data?.getUser ?(
                         <Typography className={classes.profession}>  { data?.getUser.profession}</Typography>
                         ):(   
                             <Skeleton variant='rectangular' width={80} height={17} animation='wave'/>
                    )
                }
                < Rating 
                    readOnly
                    value={0}
                        sx={{margin:".8rem 0"}}
                />
                <Typography className={classes.ratingValue}> 9  </Typography>

                {
                    data?.getUser ? (
                    <Typography  className={classes.description}> 
                        {  data?.getUser.aboutMe}
                    </Typography>
                    ):(
                        <>
                            <Skeleton  height={18} animation='wave' sx={{ml:5}}/>
                            <Skeleton  height={18} animation='wave' />
                            <Skeleton  height={18} animation='wave' />
                        </>
                    )

                }
                
                <Box className={classes.actionWrap}>

                    <Box sx={{display:'flex',gap :"1.3rem",alignItems:'center'}}> 
                            {
                            match_300px &&(
                                <>
                                <Link to='/myFood' style={{textDecoration:"none"}}> 
                                    <Button variant='text' startIcon={< Shop2 />} size={match ? "medium" : 'small'} color='secondary'> Food  </Button> 
                                </Link>
                                    <Button variant='text' size={match ? "medium" : 'small'}  startIcon={< Assessment />}  > Blog </Button>
                                </>
                            )
                            }

                            
                        
                    </Box>
                        
                    <Tooltip title="Accout">  
                        <IconButton onClick={() => setIsOpenDialog(true)} > 
                                < Build />
                        </IconButton>
                     </Tooltip>
                </Box>
            </Box>
             </Box>

                
                            
        </>
    )
}

export default ProfileBio