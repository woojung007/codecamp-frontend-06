// regular expression = regex


// /^\w@a.com$/.test("sfdsd@a.com")

// 시작과 끝을 명확하게 해야 원하는 값을 얻을 수 있다
// 시작에는 ^ 끝에는 $ 를 적어준다
// /^\w@a.com$/.test("sfdsd@a.com")


// 한개 이상이면 + 를 붙여주면 된다
// /^\w+@a.com$/.test("sfdsd@a.com")



// 한개 이상일 수 도 있고 아닐 수도 있고 이면 ? 를 붙여준다 
// /^\w?@a.com$/.test("sfdsd@a.com")


// 없거나 한개거나 그 이상이거나 모든 것을 다 만족시킬 때 *를 붙여준다
// /^\w*@\w.\w+$/.test("sfdsd@a.com")



// . 이 원래 모든 것을 의미한다
// 그래서 의미를 탈피하는 \(역슬래시)를 붙여준다
// /^\w*@\w.\w+$/\.test("sfdsd@a.com")


// \d - digit - 숫자만 검증

// 숫자 자리수 표기 {3 ,4} - 3개 또는 4개만 가능

// [a-zA-Z] - 문자열 검증

// \s - 공백(스페이스바)

