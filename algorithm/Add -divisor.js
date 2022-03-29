// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n/2; i++){
        if(n % i === 0 ){
        answer += i
        }
    }
    return answer
}


//reduce로 풀기
function solution(n){
    const answer = new Array(n)
                    .fill(1)
                    .reduce((acc, cur, i) => {
                        return n % (cur + i) === 0
                        //약수가 맞다면, 약수를 더한 값을 다음으로 넘겨주고
                        ? acc + (cur + i)
                        //약수가 아니라면, 더하지 않고 그냥 다음으로 넘겨준다
                        : acc
                    },0)
    return answer;
}

