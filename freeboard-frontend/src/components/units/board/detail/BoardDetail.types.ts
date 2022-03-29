import { MouseEvent } from "react";

//container
export interface ILikeVariables {
  boardId: any;
}

export interface IDislikeVariables {
  boardId: any;
}

export interface IDeleteVariables {
  boardId: any;
}

//presenter
export interface IBoardDetailUIProps {
  data?: any;
  onClickLikeUp: () => void;
  onClickDislikeUp: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  moveToEdit: () => void;
  moveToList: () => void;
}
