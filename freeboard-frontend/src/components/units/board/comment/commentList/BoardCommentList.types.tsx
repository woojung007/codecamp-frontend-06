import {MouseEvent, ChangeEvent} from 'react'



//container
export interface ICommentListProps{
  boardId: string
  value?: any
  data: any
}



//presenter
export interface ICommentListUIProps{
  data?: any;
  id?: any
  onClickEdit: () => void
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void
  showModal: (event) => void
  onClickAlert: (event: MouseEvent<HTMLDivElement>) => void
  handleCancel: () => void
  isOpen: boolean
  onChangePassword: (event: ChangeEvent<HTMLButtonElement>) => void
  onLoadMore: () => void
  }
  

