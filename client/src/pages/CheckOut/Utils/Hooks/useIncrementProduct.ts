import { useMutation } from '@apollo/client'
import { GET_ALL_CART_PRODUCT, INCREMENT_PRODUCT_CART } from 'pages/CheckOut/Utils/Graphql'
import { useSetRecoilState } from 'recoil'
import { shopCart } from 'SetUp/StateManagement/Store'
import { ADD_PRODUCT_TO_CART } from '../../../FoodDetail/Components/Utils/Graphql'



const useIncrementCart =(productId : string ) => {
  const [addToCart,{data,loading,error}] = useMutation(INCREMENT_PRODUCT_CART,{
    refetchQueries:[
      {query:GET_ALL_CART_PRODUCT},
      "getProductInCart"
    ]
  })
  const setCart = useSetRecoilState(shopCart) 
   const AddToCart =  () =>{ 
     addToCart({
        variables : {
            productId,
        }
    })
    .then((result) =>{
        if(result.data.AddProductToCart && !result.errors){
           setCart((prev) => prev + 1 )
          } 

    } )

}

  return{ data,loading,error,AddToCart}
}


export default useIncrementCart