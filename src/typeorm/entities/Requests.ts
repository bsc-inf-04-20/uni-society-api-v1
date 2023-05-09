import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./user";

@Entity({name:'request'})
export class Request{

@PrimaryGeneratedColumn()
relation_id:number;

@OneToOne(type => User)
@JoinColumn({referencedColumnName: "id", name:"user_id" })
user: User;

@OneToOne(type => Society)
@JoinColumn({referencedColumnName: "society_id", name:"society_id" })
society: Society;

}