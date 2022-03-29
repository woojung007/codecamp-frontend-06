function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++){
        answer.push(x*i)
    }
    return answer;
}

//map 사용

function solution(x, n) {
    const answer = new Array(n)
                    .fill(1)
                    .map( (num, i) => {
                        return (num + i) * x;   
                    })
    return answer;
}
