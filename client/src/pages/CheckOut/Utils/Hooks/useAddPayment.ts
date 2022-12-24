import { useMutation } from '@apollo/client'
import React from 'react'
import { UseFormHandleSubmit, UseFormReset } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ADD_PAYMENT_METHOD,GET_PAYMENT_METHOD } from '../Graphql'
import { outputForm } from '../Interfaces'

type Props = {
    handleSubmit : UseFormHandleSubmit<outputForm>
    setClose:() => void
    reset:UseFormReset<outputForm>

}

const useAddPayment = ({handleSubmit,setClose,reset}:Props) => {
    const [addPayment ,{data,loading,error}] = useMutation(ADD_PAYMENT_METHOD,{
        refetchQueries:[{query:GET_PAYMENT_METHOD},"getPaymentMethod"]
    })
    const navigate = useNavigate()
    const onsubmit = handleSubmit(({detailAddress,paymentMethod},e) =>{
        e?.preventDefault()
        let payment  = ''
        if(paymentMethod === 1) payment = 'visa'
        else if(paymentMethod === 2) payment = 'master'
        else if(paymentMethod === 3) payment = 'shoopePay'
        else if(paymentMethod === 4) payment = 'goPay'
        else if(paymentMethod === 5) payment = 'dana'
        addPayment({variables:{detailAddress,paymentMethod:payment}})
            .then((result) => {
                console.log(result)
                if(result.data && !result.errors){
                    setClose()
                    reset()
                }
            }) 

        
    } )
    return {data,loading,error,onsubmit}
}

export default useAddPayment