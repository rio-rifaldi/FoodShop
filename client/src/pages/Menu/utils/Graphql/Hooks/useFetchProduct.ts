import { useQuery } from '@apollo/client'
import { GET_ALL_PRODUCT } from '..'
import { ProductI } from '../../Interfaces'


const useFetchProduct = () => {
    const {data,loading} = useQuery<ProductI>(GET_ALL_PRODUCT,{
        fetchPolicy : "cache-and-network"
    })
    
    return {data,loading}
}

export default useFetchProduct