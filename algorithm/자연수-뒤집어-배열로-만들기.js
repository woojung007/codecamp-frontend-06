function solution(n){
    let answer = []
    //숫자  n 을 문자로 바꿔주고toString 나누고split 숫자로만들고map(Number) 순서 바꿔줌reverse
    answer=(n.toString().split("").map(Number)).reverse()
    
    return answer
    }
