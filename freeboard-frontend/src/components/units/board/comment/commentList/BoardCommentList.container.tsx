//container
import CommentListUI from "./BoardCommentList.presenter";
import { useQuery, useMutation } from '@apollo/client';
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MouseEvent } from "react";
import {ICommentListProps} from './BoardCommentList.types'


export default function CommentList(props: ICommentListProps){
  const router = useRouter()
  const [deleteComment] = useMutation(DELETE_BOARD_COMMENT)



  const {data} = useQuery(FETCH_BOARD_COMMENTS,{
      variables:{
        boardId: String(router.query.boardId)
        }});
    console.log("data", data)



    const onClickDeleteComment = (event: MouseEvent<HTMLButtonElement>) => {
      console.log("commentId", router)
      const deletePassword = prompt("비밀번호를 입력하세요");
        deleteComment({
          variables:{password: deletePassword, boardCommentId: (event.target as HTMLButtonElement).id},
          refetchQueries: [{ query: FETCH_BOARD_COMMENTS,
            variables:{boardId: String(router.query.boardId)}}]
        });
      }
    




  return (
  <CommentListUI 
    data={data}
    onClickDeleteComment={onClickDeleteComment}
    handleChange={props.handleChange}
    value={props.value}

  />
)
  
}
