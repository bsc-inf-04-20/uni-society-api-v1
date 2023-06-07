import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./User";

@Entity({name:'patrone'})
export class Patrone{

@PrimaryColumn()
user_id:number;

@PrimaryColumn()
society_id:number;

@OneToOne(type=>User)
@JoinColumn({ referencedColumnName: "id" ,name:"user_id"})
user:User;

@OneToOne(type=>Society)
@JoinColumn({ referencedColumnName: "society_id" ,name:"society_id"})
society:Society;
}