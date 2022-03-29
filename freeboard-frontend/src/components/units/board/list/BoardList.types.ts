import { MouseEvent } from "react"


//presenter
export interface IListUIProps{
    data?: any
    moveToWrite: () => void
    onClickMoveToBoardDetail:(event:MouseEvent<HTMLDivElement>) => void
}
