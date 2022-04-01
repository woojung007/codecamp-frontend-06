import BoardListUI from './BoardList.presenter'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'



export default function BoardList(props){

    const router = useRouter()

    const moveToWrite = () => {
        router.push(`/boards/new`)
    }

    const onClickMoveToBoardDetail = (event:MouseEvent<HTMLDivElement>) => {
        router.push(`/boards/${(event.target as HTMLDivElement).id}`);
    }



    return(
        <BoardListUI
        data = {props.data}
        moveToWrite = {moveToWrite}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}

        />
    )
}