import { useQuery } from '@apollo/client'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { dataUserI, refetchState } from 'SetUp/StateManagement/Store'
import ProfileBio from './Component/ProfileBio'
import ProfileTab from './Component/ProfileTab'
import { GET_ALL_USER } from './Utils/Graphql'
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
