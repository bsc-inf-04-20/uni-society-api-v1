import { Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { Society } from "./Society";

//the table that maps the number of societies seeing the post
@Entity({name:'post_to_society'})
export class postToSociety{

    @PrimaryColumn()
    post_id:number;

    @PrimaryColumn()
    society_id:number;

    @ManyToOne(type=>Post)
    @JoinColumn({referencedColumnName:'post_id', name:'post_id'})
    post:Post;

    @ManyToOne(type=>Society)
    @JoinColumn({referencedColumnName:'society_id', name:'society_id'})
    society:Society;



}