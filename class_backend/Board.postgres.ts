
**// 데이터베이스와 백엔드 연결해주기**

import { createConnection } from ‘typeorm’

cerateConnection({
			type : "postgres",
			database : "postgres",
			username : "postgres",
			password : "postgres2021",
			port : // 각자의 포트를 입력해주세요(number),
			host : "34.64.187.209"

			// 어떤 테이블이 들어갈 것 인가
			entities : [//파일경로 넣어주시면 됩니다],
			logging : true,
			//entities 들어간 것들을 데이터베이스와 동기화 해줍니다.
			synchronize : true → entitites에 들어간 것들을 데이터 베이스와 동기화 해준다
			
})
// 성공시에 실행 할 것 
.then(()⇒{console.log(”접속완료”)})
// 실패시에 실행 할 것
.catch(()⇒{console.log(”접속 실패”)})
