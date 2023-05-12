import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./user";



@Entity({name:"user_society"})
export class User_Society{

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