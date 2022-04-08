import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import {v4 as uuidv4} from 'uuidv4'



const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

interface IProps{
    isMatched: boolean;
}

const Word = styled.span`
    color: ${(props: IProps) => (props.isMatched ? "red" : "black")};

    
`

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");

  const [keyword, setKeyword] = useState("")

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 0.2초안에 아무런 재작업이 없으면 실행되는 부분이 { } 안쪽 부분
  const getDebounce = _.debounce((data: any) => {
    refetch({ search: data, page: 1 });
    setKeyword(data)
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  const onClickPage = (event:any) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>
              {el.title
                .replaceAll(keyword, `#$%${keyword}#$%`)
                .split("#$%")
                .map(el => (
                <Word key={uuidv4} isMatched={keyword === el}> {el}</Word>
                ))}
        </MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}