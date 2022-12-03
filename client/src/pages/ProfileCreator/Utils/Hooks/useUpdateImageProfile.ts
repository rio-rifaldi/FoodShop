import { useMutation } from '@apollo/client'
import React, { ChangeEvent } from 'react'
import { UPDATE_IMAGE_PROFILE } from '../Graphql'


function useUpdateImageProfile(setClose:() => void) {
    const [UpdateImage,{loading:updating}] = useMutation(UPDATE_IMAGE_PROFILE,{refetchQueries :"all"})

    const onUpdateImage = async (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files !== null){
            const file = e.target.files[0]
            const result = await UpdateImage({variables:{file : file}}) 
            
            if(result.data){
                setClose()
            }
    
        }
        } 
        return {onUpdateImage,updating}
}

export default useUpdateImageProfile