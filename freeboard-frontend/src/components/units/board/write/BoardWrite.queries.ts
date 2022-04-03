import { gql} from '@apollo/client'




export const CREATE_BOARD = gql`
    mutation MyMutation($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
    _id
    writer
    title
    contents
    youtubeUrl
    likeCount
    dislikeCount
    boardAddress{
        zipcode
        address
        addressDetail
    }
    createdAt
    updatedAt
    deletedAt
    }
}
`


export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!,$password: String, $boardId: ID!){
        updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId){
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            createdAt
            updatedAt
            deletedAt
            }
}
`