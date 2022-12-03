import { gql } from "@apollo/client";

export const GET_ALL_CART_PRODUCT = gql`
    query getProductInCart{
    GetProductInCart {
        amount
        imageUrl
        name
        productId
        price
    }
    }
`

export const DELETE_PRODUCT_CART = gql`
    mutation DeleteProductToCart($productId: String!){
  DeleteProductInCart(productId: $productId)
}

`

export const DECREMENT_PRODUCT_CART = gql`
mutation decreasingProductInCart($productId: String!){
  DecreasingProductInCart(productId: $productId)
}

`