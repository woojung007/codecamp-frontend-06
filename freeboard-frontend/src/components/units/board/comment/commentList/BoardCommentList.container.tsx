//container
import CommentListUI from "./BoardCommentList.presenter";
import { useQuery, useMutation } from '@apollo/client';
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MouseEvent, ChangeEvent } from "react";
import {ICommentListProps} from './BoardCommentList.types'
import { Modal } from 'antd';


export default function CommentList(props: ICommentListProps){
  const router = useRouter()
  const [deleteComment] = useMutation(DELETE_BOARD_COMMENT)
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState();
  const [commentId, setCommentId] = useState("");

  const {data} = useQuery(FETCH_BOARD_COMMENTS,{
      variables:{
        boardId: String(router.query.boardId)
        }});
    // console.log("data", data)



    const showModal = () => {
      setIsOpen(true);
    }
  
    const handleCancel = () => {
      setIsOpen(false);
    };


    const onChangePassword = (event: ChangeEvent<HTMLButtonElement>) => {
      // console.log(event.target.value)
      setPassword(event.target.value)
    }


    const onClickDeleteComment =  (event: MouseEvent<HTMLButtonElement>) => {
      // console.log("commentId", router)
      setCommentId(event.target.id)
      showModal();

      }


      const deleteCommentApi = async() => {
        setIsOpen(false);
          await deleteComment({
              variables:{password: password, boardCommentId: commentId,
              refetchQueries: [{ query: FETCH_BOARD_COMMENTS,
                variables:{boardId: String(router.query.boardId)}}]
              }
            })
          }


          const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
            Modal.info({content:`${event.currentTarget.id}님이 작성한 글입니다.`})
          }
        




  return (
  <CommentListUI 
    data={data}
    onClickDeleteComment={onClickDeleteComment}
    showModal={showModal}
    onClickAlert={onClickAlert}
    visible={visible}
    handleCancel={handleCancel}
    isOpen={isOpen}
    deleteCommentApi={deleteCommentApi}
    onChangePassword={onChangePassword}
  />
)
  
}
