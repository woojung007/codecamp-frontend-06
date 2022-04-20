import { useQuery, gql } from "@apollo/client";
import { IBoard } from "../../../src/commons/types/generated/types";
import BoardItemPage from "./boardItem";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <BoardItemPage key={el._id} el={el} />
      ))}
    </div>
  );
}
