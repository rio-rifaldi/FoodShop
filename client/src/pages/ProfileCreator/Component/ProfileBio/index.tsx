import { Assessment, Build, LocalShipping, LocationOn, PhotoCamera, Shop2 } from '@mui/icons-material'
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


const ProfileBio =  () => {
    const match = useMediaQuery("(min-width:430px)")
    const match_300px = useMediaQuery("(min-width:300px)")
    const {classes} = useStyles()
    const [open, setOpen] = useState(false)
    const [isOpenDialog, setIsOpenDialog] = useState(false)

    const dataUser = useRecoilValue(refetchState);
    let user = dataUser?.data?.getUser 
    let image = dataUser?.data?.getUser.profileImage 
    let details = dataUser?.data?.getUser.UserDetail
    console.log(image?.url);
    
    return (
        <>  
        < DialogSetImageProfile open={open} setOpen={setOpen}  />  
        < DialogVerfy isOpenDialog={isOpenDialog} setIsOpenDialog={setIsOpenDialog}  />
    
   
        <Box className={classes.container} mx={"1.3rem"}>
            <Box className={classes.profileImageWrap} > 
                {
                (image?.url)?(
                    <img src={image.url} alt="avatar profile" className={classes.profileImage}  />
                ):(
                    <img src={profileImage} alt="avatar profile" className={classes.profileImage}  />
                )
                }
                <IconButton className={classes.iconButtonUpload} onClick={() => setOpen(true)} > 
                    < PhotoCamera sx={{color :"white"}} />
                    </IconButton>
            </Box>
            
        <Box sx={{width:{ xsMenu : "100%", sm:"70%"}}}> 
                <Box className={classes.profileNameWrap}> 
                    {
                        user ?(
                            <Typography className={classes.name}> {`${user.firstName} ${user.lastName} `} </Typography>  
                            ):(
                            < Skeleton variant='rectangular' width={150} animation='wave'/>
                        )
                    }  
                    {
                        user ?(
                            <Typography className={classes.address}> < LocationOn className={classes.iconLocation}/> {details?.country} </Typography>
                            ):(
                                <Skeleton variant='rectangular' width={60} animation='wave'/>
                                
                        )
                    }
                </Box>   
       
            {
                user ?(
                    <Typography className={classes.profession}>  { details?.profession}</Typography>
                    ):(   
                        <Skeleton variant='rectangular' width={80} height={17} animation='wave'/>
            )
            }
            < Rating 
                readOnly
                value={!(details?.rating) ? 0 : details.rating} 
                    sx={{margin:".8rem 0"}}
            />
            <Typography className={classes.ratingValue}>{!(details?.rating) ? 0 : details.rating} </Typography>

            {
                user ? (
                <Typography  className={classes.description}> 
                    {  details?.aboutMe}
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
                            <Link to='/myFood' style={{textDecoration:"none"}}> 
                                <Button variant='text' startIcon={< Shop2 />} size={match ? "medium" : 'small'} color='secondary'> Food  </Button> 
                            </Link>
                        )
                        }    
                    
                </Box>
                <Box >
                    <Tooltip title="Accout">  
                        <IconButton onClick={() => setIsOpenDialog(true)} > 
                                < Build />
                        </IconButton>
                    </Tooltip>
                    <Link to='history' tabIndex={-1}>  
                        <Tooltip title="Order history" sx={{ml:1}}>  
                            <IconButton  > 
                                    < LocalShipping />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Box>
            </Box>
        </Box>
            </Box>

                
                            
        </>
    )
}

export default ProfileBio