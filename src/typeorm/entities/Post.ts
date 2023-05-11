import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Society } from "./Society";


@Entity({name:"post"})
export class Post{

    @PrimaryGeneratedColumn()
    post_id:number;

    @Column()
    details:string;

    @CreateDateColumn()
    date:Date;

    @ManyToOne(type=>Society)
    @JoinColumn({ referencedColumnName: "society_id" ,name:"society_id"})
    society:Society;

}