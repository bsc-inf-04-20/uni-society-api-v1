import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./user";



@Entity({name:"user_society"})
export class User_Society{

@PrimaryGeneratedColumn()
relation_id:number;


@OneToOne(type => User)
@JoinColumn({referencedColumnName: "id", name:"user_id" })
user: User;

@OneToOne(type => Society)
@JoinColumn({referencedColumnName: "society_id", name:"society_id" })
society: Society;

}