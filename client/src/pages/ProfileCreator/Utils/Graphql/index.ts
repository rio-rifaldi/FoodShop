import { gql } from "@apollo/client";

export const GET_ALL_USER = gql`
    query getUser{
        getUser {
            email
            username
            firstName
            lastName
            UserDetail{
                country 
                aboutMe 
                profession
                address
                birthDay
                numberTelp
                rating
            }

            profileImage {
                url
                secureUrl
            }
    }
}
`

export const ADD_IMAGE_PROFILE = gql`
    mutation addImageProfile($file: Upload!){
    addImageProfile(file: $file) {
        secureUrl
        url
    }
}
`
export const DELETE_IMAGE_PROFILE = gql`
    mutation deleteImageProfile{
    deleteImageProfile
    }
`
export const UPDATE_IMAGE_PROFILE = gql`
    mutation updateImageProfile($file: Upload!){
    updateImageProfile(file: $file) {
        url
        secureUrl
    }
}
`
export const VERIFY_USER = gql`
    mutation verifyUserUpdate($password: String!){
    VerifyUserUpdate(password: $password)
    }
`