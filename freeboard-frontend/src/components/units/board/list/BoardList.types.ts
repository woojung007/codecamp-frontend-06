import { MouseEvent, ChangeEvent } from 'react';


// container
export interface IBoardList{
    refetch: any
    data: any
}


// presenter
export interface IListUIProps{
    data?: any

    moveToWrite: () => void
    onClickMoveToBoardDetail:(event:MouseEvent<HTMLDivElement>) => void

    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
    keyword:string

}
