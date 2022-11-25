import { gql } from "@apollo/client";

export const PRODUCT_MUTATION = gql`
    mutation createProduct($file: [Upload!]!, $input: ProductInput!){
      createProduct(file: $file, input: $input){
        price
        name
      }
    }

`