import Child1 from "../../src/components/commons/units/board/14-lifting-state-up/Child1"
import Child2 from "../../src/components/commons/units/board/14-lifting-state-up/Child2"
import { useState } from 'react';

export default function LiftingStateUpPage(){
    const [count, setCount] = useState(0)

    //  방법 - 1
    const onClickCountUp = () => {
        setCount((prev) => prev + 1);
    }

    return(
        <div>
        <Child1 count={count} setCount={setCount}/>
            <div>=============================</div>
        <Child2 count={count} onClickCountUp={onClickCountUp}/>
        </div>
    )
}