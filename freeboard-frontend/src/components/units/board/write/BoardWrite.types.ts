import { ObjectTypeExtensionNode } from "graphql"
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
    boardAddress?: {
        zipcode?: string
        address?: string
        addressDetail?: string
    }

}

export interface ICreateBoardInput{
    createBoardInput: object,
    password?: string
}



//presenter
export interface IBoardWriteUIProps{
    onChangeInputs:(event: ChangeEvent<HTMLInputElement>) => void
    // onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    // onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    // onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    // onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
    // onChangeYoutubeUrl:(event: ChangeEvent<HTMLInputElement>) => void
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
    zipcode: any
    address:string
    addressDetail:string


}


//style

export interface IRegisterBtnProps{
    isActive: boolean
}