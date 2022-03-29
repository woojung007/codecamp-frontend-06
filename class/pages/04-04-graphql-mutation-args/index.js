// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation myMutation ($writer: String ,$title: String ,$contents: String) {



        createBoard(writer : $writer ,title : $title, contents : $contents){
            _id
            number
            message
        }
    }
`


export default function GraphqlMutationPage(){
    
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlAPi = async () => {

        // const result = await axios.get("https://koreanjson.com/posts/1")
        //get - method        /posts - endpoint

        const result = await callApi({
            variables: { writer : "철수" ,title : "우정이의 개발일지", contents : "화이팅!" }
        }) //graphql-api 방식
        console.log(result)
        // console.log(result.data.title)
        // setData(result.data.title)
    }
    
    return (
        <>  {/*빈태그 - 프래그먼트 */}
            <button onClick={callGraphqlAPi}>GRAPHQL-API 요청하기</button>
            <div>{data}</div>
        </>

    )
}