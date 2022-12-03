import { shopCart } from './../../../../SetUp/StateManagement/Store';
import { useMutation } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import { DELETE_PRODUCT_CART, GET_ALL_CART_PRODUCT } from '../Graphql'


const useDeleteProductCart = (productId : string,amount:number) => {
    const [deleteCart,{data,loading,error}] = useMutation(DELETE_PRODUCT_CART,{
        refetchQueries : [
            {query : GET_ALL_CART_PRODUCT},
            "GetProductInCart"
        ]
    })
    const setCart = useSetRecoilState(shopCart)
    
    const DeleteCart = () =>{
        deleteCart({
            variables :{productId}
        })
        .then((result) =>{
            if(result.data.DeleteProductInCart && !result.errors){
                setCart((prev) => prev - amount )
            }
        } )
    } 

    return {data,loading,error,DeleteCart}
}

export default useDeleteProductCart