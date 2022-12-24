import { useQuery } from '@apollo/client'
import { GET_PAYMENT_METHOD } from '../Graphql'
import { paymentI } from '../Interfaces'


const useGetPayment = () => {

    const {data,loading,error} = useQuery<paymentI>(GET_PAYMENT_METHOD)
    const payment =  data?.getUser.payment
    return { payment,loading,error}
}



export default useGetPayment