function solution(n){ 
	let answer = 0;
//인덱스 값으로 접근하기 위해 문자열 타입으로 변환
    n= String(n);
for(let i = 0; i < n.length; i++){
    answer += Number(n[i]) 
    }
    return answer
}

solution (123)
