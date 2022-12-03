import { useMutation } from '@apollo/client'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { shopCart } from 'SetUp/StateManagement/Store'
import { DECREMENT_PRODUCT_CART, GET_ALL_CART_PRODUCT } from '../Graphql'

type Props = {}

const useDecrementProductCart = (productId : string) => {
    const [decrementCart,{data,loading,error}] = useMutation(DECREMENT_PRODUCT_CART,{
        refetchQueries:[
          {query:GET_ALL_CART_PRODUCT},
          "getProductInCart"
        ]
      })
      const setCart = useSetRecoilState(shopCart) 
       const DecrementCart =  () =>{ 
        decrementCart({
            variables : {
                productId
            }
        })
        .then((result) =>{
            if(result.data.DecreasingProductInCart && !result.errors){
               setCart((prev) => prev - 1 )
              } 
    
        } )
}
return { data,loading,error,DecrementCart}
}

export default useDecrementProductCart