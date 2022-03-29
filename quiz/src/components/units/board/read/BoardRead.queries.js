import {gql} from "@apollo/client"



export const FETCH_BOARD = gql`        
# gql import
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`
