import { gql} from '@apollo/client'




export const CREATE_BOARD = gql`
    mutation MyMutation($createBoardInput: CreateBoardInput!, $boardAddress:boardAddress){
    createBoard(createBoardInput: $createBoardInput, boardAddress: $boardAddress){
    _id
    writer
    title
    contents
    youtubeUrl
    likeCount
    dislikeCount
    boardAddress
    createdAt
    updatedAt
    deletedAt
    }
}
`


export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!, $boardAddress: BoardAddress, $password: String, $boardId: ID!){
        updateBoard(updateBoardInput: $updateBoardInput, boardAddress: $boardAddress, password: $password, boardId: $boardId){
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            boardAddress
            createdAt
            updatedAt
            deletedAt
            }
}
`