import BoardListUI from './BoardList.presenter'
import { useQuery } from '@apollo/client'
import { FETCH_BOARDS } from './BoardList.queries'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'



export default function BoardList(){

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARDS)

    const moveToWrite = () => {
        router.push(`/boards/new`)
    }

   const onClickMoveToBoardDetail = (event:MouseEvent<HTMLDivElement>) => {
       router.push(`/boards/${(event.target as HTMLDivElement).id}`);
   }

    return(
        <BoardListUI
        data = {data}
        moveToWrite = {moveToWrite}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        />
    )
}