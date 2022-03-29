// 문자열 내림차순으로 배치하기

function solution(s) {
  return s
  	.split("")
    .sort()
    .reverse()
    .join("")
}

solution("Zbcdefg")


// 아스키코드

// 1. 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다
// 2. 문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소관계를 비교

// “a”.charCodeAt()
// "z".charCodeAt()

// 알파벳 소문자의 유니코드
// 97 ~ 122

// 알파벳 대문자의 유니코드
// 65 ~ 90
