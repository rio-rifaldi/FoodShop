import { gql } from "@apollo/client";

export const getUser = gql`
    query getUser{
        getUser {
            email
            username
            firstName
            lastName
            country 
            aboutMe 
            profession
            address
            birthDay
            numberTelp

            profileImage {
                url
                secureUrl
            }
    }
}
`
