import { useMemo, useState, useCallback } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다!!");
  let countLet = 0;
  const [countState, SetCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), [countState]);
  console.log(aaa);

  const onClickCountLet = () => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1;
  };

  // useMemo - 많이 사용하지 않음 / useCallback - 함수는 많이들 사용한다
  // useCallback - 잘못 사용한 예 -> state도 같이 저장함 => state도 같이 기억함
  // 그럼 언제 사용하지 말아야 하는가 ? 의존성 배열이 클때
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    SetCountState((prev) => prev + 1);
  }, []);

  // useMemo로  useCallback 만들어보기!!!
  //   const onClickCountState = useMemo(() => {
  //     return () => {
  //       SetCountState(countState + 1);
  //     };
  //   }, []);

  return (
    <div>
      <div>=================================</div>

      <h1>이것은 컨테이너 입니다!!</h1>

      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기!!!</button>

      <div>카운트(state):{countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기!!!</button>
      <div>=================================</div>
      <MemoizationPresenterPage countState={countState} />
      {/* props 넘겨주면 리랜더링이 된다 
      // 아무거나 props 넘겨주면 안된다
        // 정말 필요한 상황에 넘겨줘야 유지가 된다 */}
    </div>
  );
}
