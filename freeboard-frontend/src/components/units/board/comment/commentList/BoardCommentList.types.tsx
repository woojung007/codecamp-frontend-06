import {MouseEvent} from 'react'



//container
export interface ICommentListProps{
  boardId: string
  handleChange?: (value:any) => void
  value?: any
}



//presenter
export interface ICommentListUIProps{
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void
  data?: any;
  id?: any
  handleChange?: (value:any) => void
  value?: any
  }
  