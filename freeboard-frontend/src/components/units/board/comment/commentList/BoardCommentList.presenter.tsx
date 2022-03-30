//프레젠터
import * as S from "./BoardCommentList.styles";
import {ICommentListUIProps} from "./BoardCommentList.types";
import { MouseEvent } from "react"; 
import { Modal, Rate } from 'antd'
import { useState } from "react";

export default function CommentListUI(props: ICommentListUIProps) {


  return (
    <S.BodyHTML>
      <S.Container>
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.CommentArea key={el._id}  id={String(el._id)}
              onClick={props.onClickAlert}>
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
                <S.DeleteBtn id={el._id} onClick={props.showModal}>
                  delete
                </S.DeleteBtn>
              </S.IconDiv>
          </S.CommentArea>
        ))}
                {props.isOpen &&
                  <Modal
                  title="비밀번호를 입력해주세요"
                  visible={props.isOpen}
                  onOk={props.onClickDeleteComment}
                  onCancel={props.handleCancel}
                  >
                  <S.ModalInput onChange={props.onChangePassword}  type="password"/>
                </Modal>
                }



      </S.Container>
    </S.BodyHTML>
    
  );
  
}
