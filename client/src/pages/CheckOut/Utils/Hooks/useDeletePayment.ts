import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_PAYMENT_METHOD, GET_PAYMENT_METHOD } from '../Graphql'


const useDeletePayment = () => {
    const [deletePayment,{data,loading,error}] = useMutation(DELETE_PAYMENT_METHOD,{
        refetchQueries:[{query:GET_PAYMENT_METHOD},"getPaymentMethod"]
    })
    const deletepayment = async (id:string) =>{
        await deletePayment({variables:{paymentId:id}})
    } 

    return {data,loading,error,deletepayment}
       
}

export default useDeletePayment