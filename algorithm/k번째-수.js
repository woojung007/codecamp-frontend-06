//k번째 수
function solution(array, commands) {
  const answer = [];
  
  for( let idx = 0; idx < commands.length; idx++ ) {
      const i = commands[idx][0];
      const j = commands[idx][1];
      const k = commands[idx][2];
      
      const result = array.slice( i - 1, j )
                          .sort( (a, b) => {
                              return a - b
                          })
      answer.push( result[k - 1] )
  }
  
  return answer;
}
//오름차순 a-b
//내림차순   

// solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])

// .sort() 는 앞자리만 봄
// 오름차순 내림차순 반드시 명시


//map 사용
function solution(array, commands) {
  const answer = commands.map( el => {
      
      const result = array.slice( el[0] - 1, el[1] )
                          .sort( (a, b) => {
                              return a - b   
                          })
      return result[ el[2] - 1 ]
  }) 
        
  return answer;
}