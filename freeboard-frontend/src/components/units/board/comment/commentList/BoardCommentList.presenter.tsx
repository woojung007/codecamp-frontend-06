//프레젠터
import * as S from "./BoardCommentList.styles";
import {ICommentListUIProps} from "./BoardCommentList.types";
import { MouseEvent } from "react"; 
import { Rate } from 'antd'

export default function CommentListUI(props: ICommentListUIProps) {

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`)
  }


  return (
    <S.BodyHTML>
      <S.Container>
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.CommentArea key={el._id}  id={String(el.id)}  onClick={onClickAlert}>
              <S.Profile>profile</S.Profile>
              <S.TextArea>
                <S.Name>
                  {el.writer}
                  <Rate value={el.rating} disabled={true}/>
                </S.Name>
                <S.Comment> {el.contents}</S.Comment>
                <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
              </S.TextArea>
              <S.IconDiv>
                <S.EditBtn>edit</S.EditBtn>
                <S.DeleteBtn id={el._id} onClick={props.onClickDeleteComment}>
                  delete
                </S.DeleteBtn>
              </S.IconDiv>
          </S.CommentArea>
        ))}
      </S.Container>
    </S.BodyHTML>
  );
}
