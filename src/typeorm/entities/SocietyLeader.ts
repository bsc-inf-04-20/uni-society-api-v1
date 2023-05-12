import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./user";

@Entity({name:'society_leader'})
export class Society_Leader{

@PrimaryGeneratedColumn()
leadership_id:number;


@ManyToOne(type => User)
@JoinColumn({referencedColumnName: "id", name:"user_id" })
user: User;

@ManyToOne(type => Society)
@JoinColumn({referencedColumnName: "society_id", name:"society_id" })
society: Society;

}