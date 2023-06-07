import { Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./User";

@Entity({name:'society_leader'})
export class Society_Leader{

@PrimaryColumn()
user_id:number;

@PrimaryColumn()
society_id:number;


@ManyToOne(type => User)
@JoinColumn({referencedColumnName: "id", name:"user_id" })
user: User;

@ManyToOne(type => Society)
@JoinColumn({referencedColumnName: "society_id", name:"society_id" })
society: Society;

}