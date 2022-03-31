import {useQuery,gql} from "@apollo/client"
import styled from "@emotion/styled"
import { useState } from 'react';

const FETCH_BOARDS = gql`        
    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            _id
            writer
            title
            contents
        }
    }
`

const MyRow = styled.div`
    display: flex;
    
`

const MyColumn = styled.div`
    /* width: 25%; */

`

export default function MapBoardPage(){
    const [startPage, setStartPage] = useState(1)
    const {data, refetch} = useQuery(FETCH_BOARDS)

    const onClickPage = (event) => {
        refetch({page: Number(event.target.id)})
    }

    const onClickPrevPage = (event) => {
        setStartPage((prev)=> (prev - 10))
        refetch({page: Number(event.target.id)})
    }

    const onClickNextPage = (event) => {
        setStartPage((prev)=> (prev + 10))
        refetch({page: Number(event.target.id)})
    }


    return(
        <div>
            {data?.fetchBoards.map((el: any, index:any) => (
                <MyRow key={el._id}>
                    <MyColumn><input type="checkbox" /></MyColumn>
                    <MyColumn>{el.number}</MyColumn>
                    <MyColumn>{index+1}</MyColumn>
                    <MyColumn>{el.writer}</MyColumn>
                </MyRow>
            ))}
            <span onClick={onClickPrevPage}>이전페이지</span>
            {
                new Array(10).fill(1).map((_, index) => (
                    <span key={index + startPage} onClick={onClickPage} id = {String(index + startPage)}>
                        {index + startPage}
                    </span>
                ))
            } 
            <span onClick={onClickNextPage}>다음페이지</span>

            
            
            
            {/* {
                [1, 2, 3,4,5,6,7,8,9,10].map((el) => (
                    <span key={el} onClick={onClickPage} id = {String(el)}>
                        {el}
                    </span>
                ))
            } */}

                {/* <span onClick={onClickPage} id = "1">1</span>
                <span onClick={onClickPage} id = "2">2</span>
                <span onClick={onClickPage} id = "3">3</span> */}

        </div>

    )

}