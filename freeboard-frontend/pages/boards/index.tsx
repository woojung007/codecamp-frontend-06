import BoardList from "../../src/components/units/board/list/BoardList.container";
import BoardBestList from "../../src/components/units/board/bestboards/BestBoards.container";
import { gql, useQuery } from "@apollo/client";
import PaginationPage from "../../src/components/commons/paginations/01-simple/Pagination.container";
import { IQuery } from "../../src/commons/types/generated/types";
import { IQueryFetchBoardsArgs } from "../../../quiz/src/commons/types/generated/types";

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardCount {
    fetchBoardsCount
  }
`;

export default function BestBoardPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  return (
    <>
      <BoardBestList />
      <BoardList data={data} refetch={refetch} />
      <PaginationPage dataBoardsCount={dataBoardsCount} refetch={refetch} />
    </>
  );
}
