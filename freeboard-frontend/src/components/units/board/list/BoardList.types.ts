import { MouseEvent, ChangeEvent } from 'react';


// presenter
export interface IListUIProps{
    data?: any

    moveToWrite: () => void
    onClickMoveToBoardDetail:(event:MouseEvent<HTMLDivElement>) => void

    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
    keyword:string

}
