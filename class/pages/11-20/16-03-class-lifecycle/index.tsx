import { Component, createRef } from "react";
import Router from 'next/router'

interface IState{
    count:number;
}


export default class CounterPage extends Component{
    inputRef = createRef<HTMLInputElement>()
    state = {
        count: 0
    }



    componentDidMount(){
        console.log("mount!!!!!!")
        //포커스 깜빡깜빡
        this.inputRef.current?.focus();
    }

    componentDidUpdate(){
        console.log("update!!!!!!")
    }


    componentWillUnmount(){
        console.log("gone!!!!")
        //채팅방 나가기
        //api 요청 !!!
    }



    onClickCounter = () => {
        console.log("카운터크리릭")
        console.log(this.state.count)
        this.setState((prev: IState)=>({
            count: prev.count + 1
        }))
    }

    onClickMove(){
        Router.push("/")
    }

    render(){
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <div>현재카운트: {this.state.count}</div>
                <button onClick={this.onClickCounter}>카운트 올리기 !!!</button>
                <button onClick={this.onClickMove}>나가기!!!</button>
            </div>
        )
    }


}