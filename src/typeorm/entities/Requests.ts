import { Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./User";

@Entity({name:'request'})
export class Request{

@PrimaryColumn()
user_id:number;

@PrimaryColumn()
society_id:number;

@ManyToOne(type => User)
@JoinColumn({ referencedColumnName: "id" ,name:"user_id"})
user: User;

@ManyToOne(type => Society)
@JoinColumn({referencedColumnName: "society_id", name:"society_id" })
society: Society;

}