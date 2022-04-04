import { Component, createRef, useEffect, useRef, useState } from 'react';
// import Router from 'next/router'
import { useRouter } from 'next/router';


interface IState{
    count:number;
}


export default function CounterPage(){
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [count, setCount] = useState(99)


    // inputRef = createRef<HTMLInputElement>()

    // state = {
    //     count: 0
    // }


    //1. DidMount
    // componentDidMount(){
    //     console.log("mount!!!!!!")
    //     //포커스 깜빡깜빡
    //     this.inputRef.current?.focus();
    // }

    // useEffect(() => {
    //     console.log("mount!!!!!!")
    //     inputRef.current?.focus();
    // },[])


    //2.DidUpdate
    // componentDidUpdate(){
    //     console.log("update!!!!!!")
    // }
    //처음에는 실행 안됨

    useEffect(()=> {
        console.log("update!!!!!!")
    },[count])
//처음에도 실행됨 


    //3. WillUnmount
    // componentWillUnmount(){
    //     console.log("gone!!!!")
    //     //채팅방 나가기
    //     //api 요청 !!!
    // }
    // useEffect(()=>{
    //     return () => {
    //     console.log("gone!!!!")
    //     }
    // },[])
    // //한번만 실행될 때 ,[] 써라




    //4.DidMount와 WillUnmount를 합치기 !!
    useEffect(() => {
        console.log("마운트됨!!!");
        inputRef.current?.focus();
        
        return () => {
            console.log("gone!!!!")
            }
    },[])


    //[]  : dependency array : 의존성 배열
    //[count] 라면? count 가 바뀔때만 실행 (처음 한번은 실행)



    //5. useEffect의 잘못된 사용 예(1. 추가렌더링, 2.무한루프 )

    // useEffect(()=>{
    //     setCount(prev => prev + 1)
    // },[count])
    //  불필요한 화면 렌더링이 더 일어난다
    //가급적이면 useEffect안에 setState 사용을 권장하지 않는다




    const onClickCounter = () => {
        // console.log("카운터크리릭")
        // console.log(this.state.count)
        // this.setState((prev: IState)=>({
        //     count: prev.count + 1
        // }))
        setCount(prev => prev + 1)
    };

    const onClickMove = () => {
        // Router.push("/")
        router.push("/");
    }

    console.log("나는 언제 실행되게???????")

        return (
            <div>
                <input type="text" ref={inputRef}/>
                <div>현재카운트: {count}</div>
                <button onClick={onClickCounter}>카운트 올리기 !!!</button>
                <button onClick={onClickMove}>나가기!!!</button>
            </div>
        )



}