import BoardListUI from './BoardList.presenter'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import { useQuery } from '@apollo/client';
import {FETCH_BOARDS_QUERIES} from './BoardList.queries'
import { IQuery, IQueryFetchBoardArgs } from '../../../../commons/types/generated/types';




export default function BoardList(props: any){

    const router = useRouter()

    const {data} = useQuery<Pick<IQuery, 'fetchBoards'>,IQueryFetchBoardArgs>(FETCH_BOARDS_QUERIES)


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
        dataRefetchBoards={props.dataRefetchBoards}
        dataBoardsCount={props.dataBoardsCount}
        onClickPage={props.onClickPage}
        onClickPrevPage={props.onClickPage}
        onClickNextPage={props.onClickNextPage}
        startPage={props.startPage}
        lastPage={props.lastPage}
        current={props.current}
        />
    )
}