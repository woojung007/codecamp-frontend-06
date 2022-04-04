import { ChangeEvent, MouseEvent } from "react";
import { Rating } from '../commentList/BoardCommentList.styles';

//container
export interface ICommentWrite {
  el: any
  isEdit: boolean
  setIsEdit:() => void

}


export interface ICreateBoardCommentInput {
  createBoardCommentInput: object;
  boardId: String
}



export interface IUpdateComment{
  boardId: any
  writer?: string
  contents?: string
  rating?: any
}


//presenter
export interface ICreateCommentUIPage {}

export interface ICommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWriteComment: () => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  isActive: boolean;
  id?: any
  writer: string
  password: string
  contents: string
  value: number
  handleChange: any
  isEdit: boolean
  setIsEdit:() => void
  el: any
}



//style

export interface ICommentCreateBtn {
  isActive: boolean;
}
