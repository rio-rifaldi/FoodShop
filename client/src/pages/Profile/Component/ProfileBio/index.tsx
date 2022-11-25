import { Article, ChatBubble, LocationOn, PhotoCamera, Report, Shop } from '@mui/icons-material'
import { Box, Button, IconButton, Rating, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import profileImage from 'assets/images/svg/avatar.jpg'
import { Link } from 'react-router-dom'
import useStyles from './Style'
import BlogAndFood from './utils/BlogAndFood'
import BookmarkIcon from './utils/BookmarkIcon'
import EmailAndBookmark from './utils/EmailAndBookmark'
type Props = {
}


const ProfileBio = (props: Props) => {
    const match = useMediaQuery("(min-width:430px)")
    const match_300px = useMediaQuery("(min-width:300px)")
    const {classes} = useStyles()
    return (
        <>  
          <Box className={classes.container}>
             <Box className={classes.profileImageWrap} > 
                 <img src={profileImage} alt="avatar profile" className={classes.profileImage}  />
                    <IconButton className={classes.iconButtonUpload}> 
                        < PhotoCamera sx={{color :"white"}} />
                     </IconButton>
             </Box>
             
            <Box sx={{maxWidth:{sm:"70%"}}}> 
                <Box className={classes.profileBioWrap} >
                    <Box className={classes.profileNameWrap}> 
                        <Typography className={classes.name}> Jeremeny rose </Typography> 

                        <Typography className={classes.address}> < LocationOn className={classes.iconLocation}  /> Sandiego Amerika </Typography>
                  </Box>  
        
                        {
                        match ?(
                            < BookmarkIcon />
                        ):(
                            < EmailAndBookmark />
                        )
                        }  
                    </Box>

                <Typography className={classes.profession}> product designer </Typography>
                
                < Rating 
                    readOnly
                    value={4}
                        sx={{margin:".8rem 0"}}
                />
                <Typography className={classes.ratingValue}> 8,7  </Typography>

                <Typography  className={classes.description}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, necessitatibus, et quaerat explicabo autem repellat saepe repellendus, mollitia pariatur officiis maxime! Accusantium tenetur praesentium nisi magnam nulla odio eaque distinctio vel voluptas?
                    </Typography>
                
                <Box className={classes.actionWrap}>

                <Box sx={{display:'flex',gap :"1.3rem",alignItems:'center'}}> 
                        {
                        match &&(
                            <Button variant='text' startIcon={< ChatBubble />} size='small'> Send Message  </Button>
                        )
                        }
                    
                    <Button variant='text' size='small' color='error' startIcon={< Report color="error" />}> Report User </Button>
                 </Box>
                {
                    match_300px &&(
                        < BlogAndFood />
                    )
                }
                </Box>
            </Box>
             </Box>
        </>
    )
}

export default ProfileBio