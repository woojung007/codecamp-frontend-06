import {MouseEvent, ChangeEvent} from 'react'



// container
export interface ICommentListProps{
  boardId: string
  value?: any
  data: any
}



// presenter
export interface ICommentListUIProps{
  data?: any;
  id?: any
  onClickDeleteComment: (event: MouseEvent<HTMLElement>) => void
  showModal: any
  handleCancel: () => void
  isOpen: boolean
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onLoadMore: () => void
  
  }
  

