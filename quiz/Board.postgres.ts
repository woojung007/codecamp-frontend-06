// 데이터베이스와 백엔드 연결해주기

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 export class Board{
	@PrimaryGeneratedColumn("increment")
	//키 값을 자동으로 만들어 줌
	number!: number;


	@Column({type: "text"})
	writer!: string;

	@Column({type: "text"})
	title!: string;

	@Column({type: "text"})
	contents!: string;


}
