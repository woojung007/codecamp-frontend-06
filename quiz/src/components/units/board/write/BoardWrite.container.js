//컨테이너 컴포넌트

import {useState} from 'react'
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD} from './BoardWrite.queries'


export default function BoardWrite(){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle ] = useState("")
    const [myContents, setMyContents ] = useState("")

    const [callAPI] = useMutation(CREATE_BOARD)
    const callGraphqlAPI = async () => {

    try{
        const result = await callAPI({
            variables: { writer : myWriter ,title : myTitle, contents : myContents }
        }) 
        console.log(result)
        console.log(result.data.createBoard.message)
        alert("게시글 등록에 성공했어요!")
        alert("상세페이지로 이동해볼까요?")

        router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)

    }catch(error){
        alert(error.message)
    }
}
    const onChangeWriter = (event) => {
        setMyWriter(event.target.value) 

        if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }

    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)

        if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }

    const onChangeContents = (event) => {
        setMyContents(event.target.value)

        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }

    return (
        <BoardWriteUI         
        onChangeWriter ={onChangeWriter} 
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        callGraphqlAPI={callGraphqlAPI}
        isActive={isActive}
        isEdit={isEdit}
        />
    )
}