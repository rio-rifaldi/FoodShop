import { gql } from '@apollo/client';
export const GET_PRODUCT_DETAIL = gql`
 query Product($productId: String!){
  Product(productId: $productId) {
    _id
    name
    price
    stock
    expired
    description
    taste
    image {
      url
    }
  }
}
`

export const ADD_PRODUCT_TO_CART = gql`
mutation addToCart($description: String!, $productId: String!){
  AddProductToCart(description: $description, productId: $productId)  
}


`