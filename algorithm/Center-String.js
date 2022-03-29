//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
    let answer = '';
    let i = 0;
    i = Math.floor(s.length / 2 )
    if(s.length % 2 === 1){
        answer = s[i]
    }else{
        answer = s[i-1] + s[i]
}
    return answer;
}


//삼항연산자 사용
function solution(s){
    //Math.floor = 내림처리(소수점을 제거)
    const center = Math.floor(s.length / 2);
    return s.length % 2 
            ? s[center]   //홀수 문자열
            : s.slice(center - 1, center + 1)   //짝수 문자열
}