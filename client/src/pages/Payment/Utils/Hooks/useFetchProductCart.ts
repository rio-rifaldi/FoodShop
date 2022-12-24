import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_CART_PRODUCT } from '../Graphql'
import { productCartListI } from '../Interfaces'


const useFetchProductCart = () => {
    const {data,loading,error}  = useQuery<productCartListI>(GET_ALL_CART_PRODUCT,{
        fetchPolicy: 'cache-and-network',
        initialFetchPolicy : "cache-and-network"
    })
    console.log(error);
    return {data,loading,error}
}

export default useFetchProductCart