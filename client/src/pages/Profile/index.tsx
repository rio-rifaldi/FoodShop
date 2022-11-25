import { Box } from '@mui/material'
import ProfileBio from './Component/ProfileBio'
import ProfileTab from './Component/ProfileTab'


type Props = {}

const ProfileCreator = (props: Props) => {   

    return (        
        <Box sx={{margin :"5rem 1.3rem 4rem 1.3rem"}}>  
             < ProfileBio />
             < ProfileTab />
         </Box>
    )
}

export default ProfileCreator
