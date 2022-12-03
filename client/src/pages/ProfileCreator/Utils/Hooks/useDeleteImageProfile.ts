import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_IMAGE_PROFILE, GET_ALL_USER } from '../Graphql'

type Props = {

}

const useDeleteImageProfile = (setClose:() => void) => {
    const [DeleteImage] = useMutation(DELETE_IMAGE_PROFILE,{
        refetchQueries:"all",
    })

    const onDeleteImage = async () =>{
        const result = await DeleteImage()
        if(result.data?.deleteImageProfile === true){
            setClose()
        }
    }
    return {onDeleteImage}
}

export default useDeleteImageProfile