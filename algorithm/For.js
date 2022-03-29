//[1]
//만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력
function sum(num) {
    let count = 0;
    for(let i = 0; i <= num; i++){
    count += i
    }console.log(count)
} 

//[2]
//"a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들어라
function countLetter(str) {
    let count = 0;
for(let i = 0 ; i <= str.length; i++){
    str = str.toLowerCase();
        if(str[i] === "a"){
            count++;
        }
    }return count;
}

//[3]
//1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어라
// makeNumber(5) // 1-2-3-4-5

function makeNumber(num){
    let answer = "";
    for(let i = 1; i <= num; i++){
            answer += i;
        if(i !== num){
            answer += "-";
        }
    } 
    return answer;
}

//[4] 홀수 문자열
//1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어라
function makeOdd(num){
    let str = '';
    for(let i = 1; i <= num; i++){
        if(i % 2 == 1){
            str += i;
        }
    }console.log(str)
}

//[5]
//해당 문자열에서 가장 큰 수를 구하는 함수를 만들어라

function bigNum(str){
    let biggest = str[0];
    
    for(let i = 1; i <= str.length; i++ ){
    if(Number(str[i]) > biggest){
        biggest = str[i];
    }
    }return biggest;
}