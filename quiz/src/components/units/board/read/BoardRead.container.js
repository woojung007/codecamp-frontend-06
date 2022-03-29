import {useQuery} from "@apollo/client"
import { useRouter } from "next/router"
import BoardReadUI from "./BoardRead.presenter"
import {FETCH_BOARD} from './BoardRead.queries'



export default function BoardRead(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    })

    return(
        <BoardReadUI 
        data = {data}
        />
    )

}