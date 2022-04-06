// container
import CommentListUI from "./BoardCommentList.presenter";
import { useQuery, useMutation } from '@apollo/client';
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT} from "./BoardCommentList.queries";
import { useRouter } from 'next/router';
import { MouseEvent, ChangeEvent, useState } from "react";
import {ICommentListProps} from './BoardCommentList.types'
import { Modal } from 'antd';
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from '../../../../../commons/types/generated/types';



export default function CommentList(props: ICommentListProps){
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState();
  const [commentId, setCommentId] = useState("");

  const [deleteComment] = useMutation<Pick<IMutation,'deleteBoardComment'>,IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)
  const {data, fetchMore} = useQuery<Pick<IQuery, 'fetchBoardComments'>,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS,{
      variables:{
        boardId: String(router.query.boardId)
        }
      }
    );

    // console.log("data", data)



    const onClickDeleteComment =  (event: MouseEvent<HTMLButtonElement>) => {
      // console.log("commentId", router)
      try{
          deleteComment({
              variables:{password: password, boardCommentId: commentId},
              refetchQueries: [
                { query: FETCH_BOARD_COMMENTS,
                variables:{boardId: String(router.query.boardId)},
              },
            ]
            })
            Modal.success({content:"댓글이 삭제되었습니다."})
            setIsOpen(false);
        }catch(error:any){
          alert(error.message)
        }
      }
    
  


    // infinite-scroll
    const onLoadMore = () => {
      if(!data) return;

      fetchMore({
          variables:{
            boardId: String(router.query.boardId),
            page : Math.ceil(data.fetchBoardComments.length / 10) + 1},
          updateQuery: (prev, { fetchMoreResult }) => {
              if(!fetchMoreResult.fetchBoardComments)
                  return {fetchBoardComments: [...prev.fetchBoardComments]};
            return {
              fetchBoardComments:  [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
              };
          }
      });
  };
  



    const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
      Modal.info({content:`${event.currentTarget.id}님이 작성한 글입니다.`})
    }
      

    const showModal = (event:any) => {
      setIsOpen(true);
      setCommentId(event.target.id)
    }
  
    const handleCancel = () => {
      setIsOpen(false);
    };


    const onChangePassword = (event: ChangeEvent<HTMLButtonElement>) => {
      setPassword(event.target.value)
    }


 


  return (
  <CommentListUI 
    data={data}
    onClickDeleteComment={onClickDeleteComment}
    showModal={showModal}
    onClickAlert={onClickAlert}
    handleCancel={handleCancel}
    isOpen={isOpen}
    onChangePassword={onChangePassword}
    onLoadMore={onLoadMore}
  />
)
  
}
