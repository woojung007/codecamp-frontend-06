import { getDate } from "../../../commons/libraries/utils";
import * as s from "./BoardList.styles";
import { IListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IListUIProps) {
  return (
    <s.BodyHTML>
      <s.Container>
        <s.SearchDiv>
          <s.SearchInput type="text" placeholder="제목을 검색해주세요." />
          <s.SearchDateInput
            type="number"
            placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
          />
          <s.SearchBtn>검색하기</s.SearchBtn>
        </s.SearchDiv>
        <s.ListDiv>
          <s.RowTitle>
            <s.ColumnNum>ID</s.ColumnNum>
            <s.Column>제목</s.Column>
            <s.ColumnSmall>작성자</s.ColumnSmall>
            <s.ColumnSmall>날짜</s.ColumnSmall>
          </s.RowTitle>
          {props.dataRefetchBoards?.fetchBoards.map((el: any, index: number) => (
            <s.Row key={el._id}>
              <s.ColumnNum>{index + 1}</s.ColumnNum>
              <s.Column  id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title}
              </s.Column>
              <s.ColumnSmall>{el.writer}</s.ColumnSmall>
              <s.ColumnSmall>{getDate(el.createdAt)}</s.ColumnSmall>
            </s.Row>
          ))} 

            <s.PagesWrapper>
                <s.PrevButton  
                  disabled={props.startPage === 1  ? true : false}  
                  onClick={props.onClickPrevPage}>
                    ❮
                  </s.PrevButton>{`      `}

                {
                    new Array(10).fill(1).map((_, index) => index + props.startPage <= props.lastPage &&  (
                        <s.Pages 
                          style={{color : props.current === index + props.startPage? "red" : "black"}}
                          key={index + props.startPage} 
                          id={String(index + props.startPage)} 
                          onClick={props.onClickPage}>
                            {`      `}{index + props.startPage}
                        </s.Pages>
                    ))
                } 
                {`      `}

                <s.NextButton 
                  disabled={!(props.startPage + 10 <= props.lastPage)? true : false} 
                  onClick={props.onClickNextPage}>
                    ❯
                </s.NextButton>
            </s.PagesWrapper>


          <s.ListBottomDiv>
            <s.BoardWriteBtn onClick={props.moveToWrite}>
              게시물 등록하기
            </s.BoardWriteBtn>
          </s.ListBottomDiv>
        </s.ListDiv>
      </s.Container>
    </s.BodyHTML>
  );
}
