import styled from '@emotion/styled'

export const BodyHTML = styled.div`
width: 100vw;
display: flex;
justify-content: center;
`

export const Container = styled.div`
width:1200px;
height:auto;
padding: 0 100px 20px 100px;
border: 0.5px solid #bdbdbd;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
margin-top: 101px;
margin-bottom: 100px;
`

//Best
export const BestDiv = styled.div`
display: flex;
flex-direction: column;
padding-top: 80px;
width: 100%;
`
export const BestBoards = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 40px;
padding-bottom: 80px;
width: 100%;
`

export const BestBoardDiv = styled.div`
background-color: lightcoral;
width: 282px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 20px;
width: 100%;
`

export const BestBoardPic = styled.div`
width: 100%;
`

export const BestBoardContent = styled.div`
width: 100%;
`

export const BestTitle = styled.div`
font-weight: 700;
font-size: 36px;
line-height: 42px;
text-align: center;
`

//Search
export const SearchDiv = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
padding-bottom: 40px;
padding-top: 40px;
`

export const SearchInput = styled.input`
width: 60%;
height: 52px;
background: #F2F2F2;
border: none;
border-radius: 10px;
padding-left: 15px;
`

export const SearchDateInput = styled.input`
width: 20%;
height: 52px;
border: 1px solid #BDBDBD;
font-weight: 400;
font-size: 12px;
line-height: 24px;
text-align: center;
color: #BDBDBD;
`

export const SearchBtn = styled.button`
width: 94px;
height: 52px;
background: #000000;
border-radius: 10px;
border: none;
color: #fff;
cursor: pointer;
:hover{
    background-color: #fff;
    color: #000000;
    border: 1px solid #BDBDBD;
}
`


//List
export const ListDiv = styled.div`
width: 100%;
height: 662px;
`

export const RowTitle = styled.div`
display: flex;
border-bottom: 1px solid #BDBDBD;
text-align: center;
height: 7%;
color: #4F4F4F;
font-weight: 600;
font-size: 16px;
line-height: 50px;
`

export const Row = styled.div`
display: flex;
border-bottom: 1px solid #BDBDBD;
text-align: center;
height: 7%;
color: #4F4F4F;
font-weight: 200;
font-size: 16px;
line-height: 50px;

cursor: pointer;
:hover{
    background-color: black;
    color: #fff;
    font-weight: 600;
}
`

export const ColumnNum = styled.div`
width: 5%;
`

export const Column = styled.div`
width: 60%;
white-space: nowrap; 
overflow: hidden; 
text-overflow: ellipsis; 
padding-left: 20px;
`

export const ColumnSmall = styled.div`
width: 20%;
`

export const ListBottomDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 50px;
`

export const BoardWriteBtn = styled.button`
width: 171px;
height: 52px;
border: 1px solid #BDBDBD;
background-color: #fff;
box-sizing: border-box;
border-radius: 10px;
text-align: center;
font-weight: 500;
font-size: 16px;
cursor: pointer;

:hover {
    background-color: black;
    color: #fff;
}

`



//pagination

export const PagesWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 60px;

`

export const Pages = styled.button`
    border: 0;
`

export const PrevButton = styled.button`
    cursor: pointer;

`

export const NextButton = styled.button`
    cursor: pointer;

`

