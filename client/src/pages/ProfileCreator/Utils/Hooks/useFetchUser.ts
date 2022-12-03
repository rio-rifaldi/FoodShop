import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { dataUserI, refetchState } from 'SetUp/StateManagement/Store'
import { GET_ALL_USER } from '../Graphql'
import { userI } from '../Interfaces'



const useFetchUser = () => {
    const User = useQuery<userI>(GET_ALL_USER,{
        fetchPolicy :"cache-and-network"
    })
    const {data,loading,refetch} = User
        const setRefetch = useSetRecoilState<dataUserI | null>(refetchState)

        useEffect(() => {
            if(data && !loading ){
                setRefetch({
                    refetch,data,loading
                })
            }
        }, [loading])
        
        return User
}

export default useFetchUser