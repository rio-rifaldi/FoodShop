import { useMutation } from '@apollo/client'
import React, { ChangeEvent } from 'react'
import { ADD_IMAGE_PROFILE } from '../Graphql'


const useAddImageProfile = (setClose:() => void) => {
    const [AddImage,{loading:adding}] = useMutation(ADD_IMAGE_PROFILE,{
        refetchQueries:"all"
    })

    const onAddImage = async (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files !== null){
            const file = e.target.files[0]
            const result = await AddImage({variables:{file : file}}) 
            setClose()
    
        }
        } 
        return {onAddImage,adding}

}

export default useAddImageProfile