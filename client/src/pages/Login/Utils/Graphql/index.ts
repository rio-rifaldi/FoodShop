import { gql } from "@apollo/client";

export const LOGIN = gql`
 mutation login($loginInput: UserInput!){
   Login(input: $loginInput){
     Token
     RefreshToken
   }
}
` 

export const getImageUser = gql`
  query getUser{
    getUser{
       profileImage {
        url
        secureUrl
    }
    }
  }
`