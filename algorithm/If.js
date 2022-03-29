//[1]
// boolean(true, false) // true
// boolean(false, true) // true
// boolean(false, false) // false

function boolean(input1, input2) {
	if(input1 === true || input2 === true) {
		console.log("true");
    }else if(input1 === false && input2 === false){
        console.log("false");
    }
}

//[2]
// 입력된 값이 "짝수"이면 "Even", 
// "홀수"이면 "Odd", 
// 0이면 "Zero"라는 문구를 띄워주세요.

function evenOdd(num){
    if(num == 0){
        console.log("Zero")
    }else if(num % 2 == 1 ){
        console.log("Odd")
    }else{
        console.log("Even")
    }
    } 


// [3]
// 18이하면 "조금 춥네요"
// 19~23이면 "날씨가 좋네요"
// 24이상이면 "조금 덥습니다"

function temperature(num){
    if(num <= 18 ){
        console.log("조금 춥네요")
    }else if(num >= 19 && num <= 23){
        console.log("날씨가 좋네요")
    }else{
        console.log("조금 덥습니다")
    }
}



//[4]
// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.
//2월은 28일로 계산합니다.

function days(month){
if(month == 2){
    console.log(28)
}else if(month == 1 || month == 3 ||
        month == 5 || month == 7||
        month == 8 || month == 10 || month == 12){
    console.log(31)
}else{
    console.log(30)
}
}

//또 다른 풀이방법
function days(month){
    const obj = {
        1 : 31,
        2 : 28,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 30,
        9 : 31,
        10 : 30,
        11 : 31,
        12 : 30
    }
    console.log(obj[month])
}

//[5]
//미니계산기 만들기
function calculator(num1, num2, operator){
	if (operator === "+") {
		console.log(num1 + num2 )
	} else if(operator ==="-") {
		console.log(num1 - num2)
	}else if(operator ==="*") {
		console.log(num1 * num2)
	}else if(operator ==="/") {
		console.log(num1 / num2)
	}else{
    console.log("올바른 입력이 아닙니다")
    }
}

