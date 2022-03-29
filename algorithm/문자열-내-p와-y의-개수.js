// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
//  단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.


//filter 사용 - 내 풀이
function solution(s){
	let arr = s.toLowerCase().split("");
  console.log(arr)
  let countP = 0;
  let countY = 0;

     arr.filter((item) => {
      if (item === "p") countP++;
     });
  	arr.filter((item)=> {
      if(item ==="y") countY++;
    });
 			console.log(countP)
 			console.log(countY)
   if(countP === countY){
     return true
   }else{
     return false
   }
}



//for문 사용한 다른사람의 풀이
function numPY(s){
  var result = true;
  s = s.toUpperCase();
  var num = 0;
  for(var i = 0; i < s.length; i++){
    if(s[i] === 'P') num++;
    if(s[i] === 'Y') num--;
  }
  result = (num === 0);

  return result;
}

solution("pPoooyY")
solution("Pyy")


//forEach 사용
// 상수/변수 값에 저장하면 안됨!!

function solution(s){
  const check = {};
  const answer = s.toLowerCase() // 1. 소문자로 변환
                  .split("")  //2. 배열로 변환
                  .forEach( str => {  //3. 배열 메서드인 forEach 사용
                    check[str] === undefined
                    ? check[str] = 1
                    //기존에 알파벳이 없다면 1을 초기값으로 생성
                    : check[str] = 1
                    //기존의 알파벳 개수를 1 증가
  }) 

  return check.p === check.y
}