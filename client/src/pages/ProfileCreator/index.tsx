import { gql, useQuery } from '@apollo/client'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { dataUserI, refetchState } from 'SetUp/StateManagement/Store'
import ProfileBio, { userType } from './Component/ProfileBio'
import ProfileTab from './Component/ProfileTab'
import { getUser } from './Utils/Graphql'


type Props = {}

const ProfileCreator = (props: Props) => {  
    const {data, refetch,loading,called} = useQuery<userType>(getUser,{
        fetchPolicy :"cache-and-network"
    })
        const setRefetch = useSetRecoilState<dataUserI | null>(refetchState)

        useEffect(() => {
            if(data && !loading ){
                setRefetch({
                    refetch,data,loading
                })

            }
      
        }, [loading])
        

    return (   
 
            <Box sx={{margin :"6rem auto 4rem auto"}}>  
                < ProfileBio/>
                < ProfileTab  />
            </Box>
   

    )
}

export default ProfileCreator
