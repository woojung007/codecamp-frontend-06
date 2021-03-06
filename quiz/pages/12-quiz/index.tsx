import {useQuery,gql} from "@apollo/client"
import styled from "@emotion/styled"
import InfiniteScroll from 'react-infinite-scroller';



const FETCH_BOARDS = gql`        
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            contents
        }
    }
`

const ScrollWrapper = styled.div`
    height:500px; 
    overflow:auto;
`

const MyRow = styled.div`
    display: flex;
    
`

const MyColumn = styled.div`
    width: 25%;

`

export default function MapBoardPage(){

    const {data, fetchMore} = useQuery(FETCH_BOARDS)


    const onLoadMore = () => {
        if(!data)return;

        fetchMore({
            variables:{page: Math.ceil(data.fetchBoards.length / 10) + 1},
            updateQuery:(prev, {fetchMoreResult}) => {
                if(!fetchMoreResult.fetchBoards)
                    return{fetchBoards: [...prev.fetchBoards]};
                
                return{
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                };
            }
        })
    }





    return(
        <ScrollWrapper>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={onLoadMore}
                    hasMore={true}
                    useWindow={false}
                >
                    {data?.fetchBoards.map((el, index) => (
                        <MyRow key={el._id}>
                            <MyColumn>{el._id}</MyColumn>
                            <MyColumn>{index+1}</MyColumn>
                            <MyColumn>{el.writer}</MyColumn>
                        </MyRow>
                    ))}

                </InfiniteScroll>
        </ScrollWrapper>

    )

}