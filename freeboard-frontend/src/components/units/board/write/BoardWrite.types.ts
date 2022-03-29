import { ChangeEvent } from "react" 



//container
export interface IBoardWriteProps{
    isEdit: boolean
    data?: any
}




export interface IUpdateVariables{
    boardId: any
    writer?: string
    title?: string
    content?: string
    youtubeUrl?: string
}

export interface ICreateBoardInput{
    createBoardInput: object,
    password?: string
}



//presenter
export interface IBoardWriteUIProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeYoutubeUrl:(event: ChangeEvent<HTMLInputElement>) => void
    callGraphqlAPI: () => void
    onClickUpdate: () => void
    writerError: string
    passwordError: string
    titleError: string
    contentError: string
    isActive: boolean
    isEdit: boolean
    data?: any
    showModal: () => void
    handleOk: () => void
    handleCancel: () => void
    handleComplete: any
    isOpen: boolean
    date: any
    zipcode: any

}


//style

export interface IRegisterBtnProps{
    isActive: boolean
}