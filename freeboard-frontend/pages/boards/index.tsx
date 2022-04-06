import BoardList from "../../src/components/units/board/list/BoardList.container";
import BoardBestList from '../../src/components/units/board/bestboards/BestBoards.container';
import { gql,useQuery } from '@apollo/client'
import PaginationPage from '../../src/components/commons/paginations/01-simple/Pagination.container';




export const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            _id
            writer
            title
            createdAt
            updatedAt
        }
    }
`


export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardCount{
        fetchBoardsCount
    }
`





export default function BestBoardPage(){

    const {data, refetch} = useQuery(FETCH_BOARDS);
    const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT);


    return (

        <>
            <BoardBestList />
            <BoardList 
            data = {data}
            />
            <PaginationPage 
            dataBoardsCount={dataBoardsCount}
            refetch={refetch}
            />
        
        </>

    )

}