import { gql } from "@apollo/client";

const SIGN_IN = gql`
mutation createUser($input: UserInputAuth!){
  CreateUser(input: $input) {
    email
    firstName
    lastName
    username
  }
}
`

export default SIGN_IN