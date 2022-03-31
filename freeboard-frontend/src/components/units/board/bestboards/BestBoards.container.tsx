import BoardBestListUI from './BestBoards.presenter';
import { useQuery } from '@apollo/client'
import { FETCH_BOARDS_OF_THE_BEST } from './BestBoards.queries'



export default function BoardBestList(){




    const {data: BestBoardsData} = useQuery(FETCH_BOARDS_OF_THE_BEST)
    console.log("data", BestBoardsData)





    return <BoardBestListUI 
    BestBoardsData={BestBoardsData}
    /> 
        
}