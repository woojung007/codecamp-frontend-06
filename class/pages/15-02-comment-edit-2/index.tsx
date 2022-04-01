import {useQuery,gql} from "@apollo/client"
import styled from "@emotion/styled"
import { useState } from 'react';

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

const MyRow = styled.div`
    display: flex;
    
`

const MyColumn = styled.div`
    width: 25%;
`

export default function MapBoardPage(){
    const [myIndex, setMyIndex] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ])
    const {data} = useQuery(FETCH_BOARDS)

    const onClickEdit = (event) => {
        const aaa = myIndex
        aaa[event.target.id] = true
        console.log(aaa)
        setMyIndex([...aaa])
        
    }



    return(
        <div>
            {data?.fetchBoards.map((el, index) =>  
            !(myIndex[index]) ? (
                <MyRow key={el._id}>
                    <MyColumn><input type="checkbox" /></MyColumn>
                    <MyColumn>{el._id}</MyColumn>
                    <MyColumn>{index+1}</MyColumn>
                    <MyColumn>{el.writer}</MyColumn>
                    <button onClick={onClickEdit} id={index}>수정</button>
                </MyRow>
            ) : (
                <div>수정하기 화면입니다</div>
            )
        )}


        </div>

    )

}