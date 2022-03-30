import {MouseEvent, ChangeEvent} from 'react'



//container
export interface ICommentListProps{
  boardId: string
  value?: any
}



//presenter
export interface ICommentListUIProps{
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void
  data?: any;
  id?: any
  onClickAlert: (event: MouseEvent<HTMLDivElement>) => void
  visible: boolean
  // handleOk: () => void
  showModal: (event) => void
  handleCancel: () => void
  isOpen: boolean
  // deleteCommentApi: () => void
  onChangePassword: (event: ChangeEvent<HTMLButtonElement>) => void

  }
  