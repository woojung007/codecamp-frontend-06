import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useState } from "react";
import _ from "lodash";
import { IBoardList } from "./BoardList.types";

export default function BoardList(props: IBoardList) {
  const [keyword, setKeyword] = useState("");

  const router = useRouter();

  const moveToWrite = () => {
    router.push(`/boards/new`);
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(event.target as HTMLDivElement).id}`);
  };

  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <BoardListUI
      data={props.data}
      moveToWrite={moveToWrite}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
    />
  );
}
