//[1]
//배열의 기능 
//마지막 요소를 새로운 배열에 넣기 
const newFruits = [];
newFruits.push(fruits[fruits.length - 1]);

//[2]
//2번째 요소까지의 데이터들을 뽑아 새로운 배열을 만들어라
let students = ["철수", "영희", "훈이", "짱구", "유리"]
let newArr = students.slice(0,2)

//[3]
//배열의 모든 요소에 문자열 추가하기
let fruits = ["사과", "바나나"]
fruits[0] = "맛있는 " + fruits[0]
fruits[1] = "맛있는 " + fruits[1]

//[7]
//문자열 배열
//문자열을 나누어라
const number = "01012345678"
let arr = [number.slice(0,3),number.slice(3,7),number.slice(7,11) ]
