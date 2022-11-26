import { gql } from "@apollo/client";

export const getUserProfileQuery = gql`
  query getUser{
    getUser{
     firstName 
      lastName
       email 
      profileImage {
                url
                secureUrl
            }
    }
  }
`
