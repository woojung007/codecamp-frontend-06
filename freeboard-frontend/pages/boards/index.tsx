import BoardList from "../../src/components/units/board/list/BoardList.container";
import BoardBestList from '../../src/components/units/board/bestboards/BestBoards.container';
import Pagination from '../../src/components/units/board/pagination/Pagination.container';



export default function BestBoardPage(){


    return (

        <>
            <BoardBestList />
            <BoardList/>
            <Pagination />
        
        </>

    )

}