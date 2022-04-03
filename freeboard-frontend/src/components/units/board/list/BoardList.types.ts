import { MouseEvent } from "react"


//container



//presenter
export interface IListUIProps{
    data?: any
    dataRefetchBoards?: any
    dataBoardsCount?: any
    moveToWrite: () => void
    onClickMoveToBoardDetail:(event:MouseEvent<HTMLDivElement>) => void
    onClickPage:any
    onClickPrevPage:any
    onClickNextPage: any
    startPage: number
    lastPage:number
    current: number
}
