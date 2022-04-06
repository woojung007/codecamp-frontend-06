import BoardBestListUI from './BestBoards.presenter';
import { useQuery } from '@apollo/client'
import { FETCH_BOARDS_OF_THE_BEST } from './BestBoards.queries'
import { IQuery, IUseditem } from '../../../../commons/types/generated/types';



export default function BoardBestList(){




    const {data: BestBoardsData} = useQuery<Pick<IQuery,'fetchBoardsOfTheBest'>,IUseditem>(FETCH_BOARDS_OF_THE_BEST)
    console.log("data", BestBoardsData)





    return <BoardBestListUI 
    BestBoardsData={BestBoardsData}
    /> 
        
}