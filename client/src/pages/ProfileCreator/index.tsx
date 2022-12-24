import { Box } from '@mui/material'
import ProfileBio from './Component/ProfileBio'
import ProfileTab from './Component/ProfileTab'
import useFetchUser from './Utils/Hooks/useFetchUser'




const ProfileCreator = () => {  
    const User = useFetchUser()
    return (   
 
            <Box sx={{margin :"6rem auto 4rem auto"}}>  
                < ProfileBio/>
                < ProfileTab />
            </Box>
   

    )
}

export default ProfileCreator
