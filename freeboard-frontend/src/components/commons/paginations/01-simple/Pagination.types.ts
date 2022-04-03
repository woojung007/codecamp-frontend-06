
//Container

export interface IPaginationPage{
    dataBoardsCount: number
    refetch: () => void
    fetchBoardsCount: any
}


//presenter
export interface IPaginationUI{
    dataRefetchBoards?: any
    dataBoardsCount?: any
    onClickPage:any
    onClickPrevPage:any
    onClickNextPage: any
    startPage: number
    lastPage:number
    current: number
}
