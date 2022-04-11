import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Mutation($password: String!, $email: String!){
        accessToken
    }
`
