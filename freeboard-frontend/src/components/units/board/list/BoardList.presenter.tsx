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
          {props.data?.fetchBoards.map((el: any, index: number) => (
            <s.Row key={el._id}>
              <s.ColumnNum>{index + 1}</s.ColumnNum>
              <s.Column  id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title}
              </s.Column>
              <s.ColumnSmall>{el.writer}</s.ColumnSmall>
              <s.ColumnSmall>{getDate(el.createdAt)}</s.ColumnSmall>
            </s.Row>
          ))} 

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
