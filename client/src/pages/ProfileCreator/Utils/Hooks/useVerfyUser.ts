import { useMutation } from '@apollo/client'
import React from 'react'
import { useForm, UseFormReset } from 'react-hook-form'
import { VERIFY_USER } from '../Graphql'

type Props = {
    onOpen: () => void,
    setIsOpenDialog :React.Dispatch<React.SetStateAction<boolean>>,
    reset : UseFormReset<verify>
}
type verify = {
    password : string,
}

const useVerfyUser = (props:Props) => {
    const [verifyUser,{error,reset:resetMutation}]  =useMutation(VERIFY_USER)

    const onVerify = async ({password}:verify,e:any) =>{
        e?.preventDefault()
        verifyUser({
            variables :{
                password
            }
        }).then((result) =>{
            if(result.data?.VerifyUserUpdate === true){
                props.reset()
                props.setIsOpenDialog(false)
                props.onOpen()
            }
        } ).catch((err) => console.log(err))

        
    }
    return{onVerify,error,resetMutation}
}

export default useVerfyUser