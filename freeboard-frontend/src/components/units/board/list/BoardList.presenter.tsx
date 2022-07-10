import * as s from "./BoardList.styles";
import { IListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

interface WordStyleProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: WordStyleProps) => (props.isMatched ? "crimson" : "black")};
`;

export default function BoardListUI(props: IListUIProps) {
  return (
    <s.BodyHTML>
      <s.Container>
        <s.SearchDiv>
          <s.SearchInput
            onChange={props.onChangeSearch}
            type="text"
            placeholder="제목을 검색해주세요."
          />
          <s.SearchDateInput
            type="number"
            placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
          />
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
              <s.ColumnNum id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {index + 1}
              </s.ColumnNum>
              <s.Column id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((title: any) => (
                    <Word
                      key={uuidv4()}
                      isMatched={props.keyword === title}
                      id={el._id}
                      onClick={props.onClickMoveToBoardDetail}
                    >
                      {title}
                    </Word>
                  ))}
              </s.Column>
              <s.ColumnSmall
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.writer}
              </s.ColumnSmall>
              <s.ColumnSmall
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.createdAt.slice(0, 10)}
              </s.ColumnSmall>
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
