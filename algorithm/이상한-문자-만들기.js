// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.



//map 이용하기
function solution(s) {
    const answer = s.split(" ")
                    .map(str => {
                    return str.split("")
                        .map((letter, i) => {
    
                    return i % 2 === 0
                        ? letter.toUpperCase()
                        : letter.toLowerCase()
                    }).join("")
                }).join(" ")
    console.log(answer)
    return answer;
}


//for 반복문

function solution(s) {
    let answer = '';
    
    let idx = 0; // 단어별로 인덱스 값을 저장하는 역할
    for( let i = 0; i < s.length; i++ ) {
        if( s[i] === " " ) {
            // 공백이라면 그냥 공백을 넣어준다. (예외처리)
            answer += " ";
            idx = 0; // idx 를 0으로 초기화
            
        } else {
            answer += idx % 2 === 0
                // 짝수 인덱스라면 대문자 추가
                ? s[i].toUpperCase()
                // 홀수 인덱스라면 소문자 추가
                : s[i].toLowerCase()
            idx++;
        }
    }
    
    return answer;
}




//indexOf

// function solution(s) {
//     let answer = '';
//   	let arr = s.split(" ")
// 		console.log(arr)
// 		console.log(arr[0],arr[1],arr[2])

//   let arr2 = arr[0].split("")
//       console.log(arr2)
//         console.log(arr2.indexOf())
		
  
//   for(let i = 0; i < arr.length; i++){
//     if((arr[i])[i] % 2 === 0){
//       answer.push(arr[i]);
//       console.log(answer)
//     }
//   }
//     return answer;
// }



