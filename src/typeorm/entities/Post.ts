import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";
import { User } from "./User";


@Entity({name:"post"})
export class Post{

    @PrimaryGeneratedColumn()
    post_id:number;

    @Column()
    details:string;

    @Column()
    date:Date;

    @ManyToOne(type=>Society)
    @JoinColumn({ referencedColumnName: "society_id" ,name:"society_id"})
    society:Society;

    @ManyToOne(type=>User)
    @JoinColumn({ referencedColumnName: "id" ,name:"user_id"})
    user:User;

}