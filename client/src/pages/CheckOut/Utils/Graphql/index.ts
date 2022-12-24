import { gql } from "@apollo/client";

export const GET_ALL_CART_PRODUCT = gql`
    query getProductInCart{
      GetProductInCart {
        amount
        description
        productId
        product {
          name
          price
          image {
            url
          }
        }
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
export const INCREMENT_PRODUCT_CART = gql`
mutation addToCart($productId: String!){
  AddProductToCart( productId: $productId)  
}

`

export const UPDATE_DESCRIPTION_ORDER = gql`
    mutation updateDescription($description: String!, $productId: String!){
  UpdateDescriptionOrder(description: $description, productId: $productId)
}
`

export const GET_PAYMENT_METHOD = gql`
  query getPaymentMethod{
    getUser{
      payment{
         _id
         detailAddress
         paymentMethod
      }
    }
  }
`


export const ADD_PAYMENT_METHOD = gql`
  mutation addPayment($detailAddress: String!, $paymentMethod: String!){
  addPaymentMethod(detailAddress: $detailAddress, paymentMethod: $paymentMethod)
}
`
export const DELETE_PAYMENT_METHOD = gql`
    mutation deletePayment($paymentId: String!){
  deletePaymentMethod(paymentId: $paymentId)
}
`