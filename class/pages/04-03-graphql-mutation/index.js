// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer : "gyy" ,title : "우정이의 개발일지", contents : "화이팅!"){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    
    const [data, setData] = useState("")
    const [callAPI] = useMutation(CREATE_BOARD)

    const callGraphqlAPI = async () => {

        // const result = await axios.get("https://koreanjson.com/posts/1")
        //get - method        /posts - endpoint

        const result = await callAPI()
        console.log(result)
        // console.log(result.data.title)
        setData(result.data.title)
    }
    
    return (
        <>  {/*빈태그 - 프래그먼트 */}
            <button onClick={callGraphqlAPI}>GRAPHQL-API 요청하기</button>
            <div>{data}</div>
        </>

    )
}