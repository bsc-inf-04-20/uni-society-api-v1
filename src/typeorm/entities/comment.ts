import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity({name:'comment'})
export class Comment{

 @PrimaryGeneratedColumn()
 comment_id:number

 @Column()
 content:string;

 @ManyToOne(type=>Post)
 @JoinColumn({ referencedColumnName: "post_id" ,name:"society_id"})
 post:Post;

}