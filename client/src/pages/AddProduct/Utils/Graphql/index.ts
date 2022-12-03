import { gql } from "@apollo/client";

export const PRODUCT_MUTATION = gql`
 mutation createProduct($imageType: [imageTypeSC!]!, $input: ProductInput!){
  createProduct(imageType: $imageType, input: $input) {
    name
    price
  }
}

`

export const AddImage = gql`  
    mutation addImageProductSelf($file: [Upload!]!){
      addImageProductSelf(file: $file) {
        url
        extension
        public_id
        bytes
        secureUrl
      }
    }
`

export const DeleteImage = gql`
  mutation deleteImageProductSelf($publicId: String!){
  deleteImageProductSelf(publicId: $publicId)
}

`