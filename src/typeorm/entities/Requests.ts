import { Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./user";

@Entity({name:'request'})
export class Request{

@PrimaryGeneratedColumn()
relation_id:number;

@ManyToOne(type => User)
@JoinColumn({ referencedColumnName: "id" ,name:"user_id"})
user: User;

@ManyToOne(type => Society)
@JoinColumn({referencedColumnName: "society_id", name:"society_id" })
society: Society;

}