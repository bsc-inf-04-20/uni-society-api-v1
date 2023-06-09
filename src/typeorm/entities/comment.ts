import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity({name:'comment'})
export class Comment{

 @PrimaryGeneratedColumn()
 comment_id:number

 @Column()
 content:string;

 @ManyToOne(()=>Post, post=>post.comments)
 @JoinColumn({ referencedColumnName: "post_id", name:"post_id"})
 post:Post;

 @ManyToOne(type=>User)
 @JoinColumn({referencedColumnName:'username', name:"username"})
 user:User;

}