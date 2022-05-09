import { useState } from 'react';


export default function StatePrevPage(){

    const [count, setCount] = useState(0)


    const onClickCounter = (event:any) => {
        // 1. 화살표함수
        setCount((prev:any) => prev + 1)

        // 2. 함수선언식
        setCount(function(prev){
            // 로직 추가 가능
            // if() 등
            // for() 등
            return prev + 1;
        })
    }

         // 3. 매개변수 바꿔보기
        setCount((sdfsdfsdfsdf:any) => sdfsdfsdfsdf + 1)



    return (
        <div>
            <div>현재카운트: {count}</div>
            <button onClick={onClickCounter}>카운트 증가!!!</button>
        </div>
    )
}