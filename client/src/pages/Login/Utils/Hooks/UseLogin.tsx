import { useMutation } from '@apollo/client'
import { StateValueContext } from 'Common/ContextApi'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LOGIN } from '../Graphql'
import { returnType } from '../Interfaces'

type Props = {}

const UseLogin = () => {
    const [login,result] = useMutation(LOGIN)
    const {reset,register,handleSubmit} = useForm<returnType>()
    const {dispatch} = useContext(StateValueContext)
    const navigate = useNavigate()


    const onSubmitForm = handleSubmit(async (data,e) =>{
        e?.preventDefault()
        const dataUser = {
          username : data.username,
          password : data.password
        }
        try {
          const result = await login({
            variables :{
              loginInput : dataUser
            }
          })
    
          console.log(result);
          if(result){
            dispatch({type:"IS_LOGINED",payload:true})
            navigate('/home')
          }
          reset()
        } catch (e) {
          console.log(result.error?.message);
        }
        
      } )
    return {register,onSubmitForm,result}
}

export default UseLogin