import { gql } from "@apollo/client";

export const ListProduct  = gql`
    query listProduct{
        ListProduct {
        _id
        name
        price
        image {
        url
        }
     }
}
`

export const deleteMutation = gql`
mutation deleteProduct($productId: String!){
     deleteProduct(productID: $productId)
}
`
export const ProductDetail = gql`
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
               public_id
          }
     }
}

`
export const UpdateProduct = gql`
     mutation updateProduct($productInput: ProductInput!, $productId: String!){
  updateProduct(productInput: $productInput, productId: $productId)
}
`

export const AddImageProduct = gql`
     mutation addProductImage($productId: String!, $file: Upload!){
  addImageProduct(productId: $productId, file: $file)
}
`

export const DeleteImageProduct = gql`
     mutation deleteImageProduct($productId: String!, $publicId: String!){
  deleteImageProduct(productId: $productId, public_id: $publicId)
}
`