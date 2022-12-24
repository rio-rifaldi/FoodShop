import { gql } from "@apollo/client";

export const GET_ALL_PRODUCT = gql`
    query getAllProduct{
    GetAllProduct {
        _id
        name
        price
        rating
        sold
        image {
        url
        }
    }
}
`