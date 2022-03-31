// import { getDate } from "../../../commons/libraries/utils";
import * as S from "./BestBoards.styles";
import { IBoardBestListUI } from './BestBoards.types';




export default function BoardBestListUI(props: IBoardBestListUI) {
  return (
    <S.BestDiv>
          <S.BestTitle>베스트 게시글</S.BestTitle>
          
          {props.BestBoardsData?.fetchBoardsOfTheBest.map((el: any) => (
          <S.BestBoards key={el._id}>
              <S.BestBoardPic>{el.images}</S.BestBoardPic>

                <S.BestBoardTitle>{el.title}</S.BestBoardTitle>

                <S.WriterDiv>
                  <S.BestBoardUser>1231231</S.BestBoardUser>
                  <S.BestBoardWriter>{el.writer}</S.BestBoardWriter>
                  <S.BestBoardDate>{el.createdAt}</S.BestBoardDate>
                  </S.WriterDiv>

          </S.BestBoards>
          ))}
      </S.BestDiv>
  );
}
