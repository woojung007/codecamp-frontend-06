import PaginationUI from "./Pagination.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './Pagination.queries'
import { MouseEvent, useState } from 'react'
import { useQuery } from '@apollo/client'





export default function Pagination(){
    const [startPage, setStartPage] = useState(1);
    const [current, setCurrent] = useState(1);

    const {data: dataRefetchBoards, refetch} = useQuery(FETCH_BOARDS);
    const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT);

    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);



    const onClickPage = (event:MouseEvent<HTMLDivElement>) => {
        refetch({page: Number( event.target.id)})
        setCurrent(Number( event.target.id));
    
    }
    
        const onClickPrevPage = (event:MouseEvent<HTMLDivElement>) => {
            if(startPage === 1) return;
            setStartPage((prev)=> (prev - 10));
            refetch({page: startPage - 10 });
            setCurrent(startPage -10)
        }
    
    
    
        const onClickNextPage = (event:MouseEvent<HTMLDivElement>) => {
            if(!(startPage + 10 <= lastPage)) return;
            setStartPage((prev)=> (prev + 10));
            refetch({page: startPage + 10 });
            setCurrent(startPage + 10)
    
        }
    
    
    



    return(
        <PaginationUI 
        dataRefetchBoards = {dataRefetchBoards}
        dataBoardsCount={dataBoardsCount}
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        startPage={startPage}
        lastPage={lastPage}
        current={current}
        />
   
    )



    

}