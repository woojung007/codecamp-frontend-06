function solution(arr) {
    let answer = 0;
    let sum = 0;
for(let i = 0; i < arr.length; i++){
    
    sum += arr[i]  
    answer = sum / arr.length

    }
    return answer;
}

//reduce 사용
function solution(arr){
    const answer = arr.reduce((acc,cur) => {
        console.log(acc,cur)
        return acc + cur;
    },0)
    return answer / arr.length
}