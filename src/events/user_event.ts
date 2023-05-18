import { Entity, ManyToOne, PrimaryColumn } from "typeorm";


@Entity({name:'user_event'})
export class User_event{
    
    @PrimaryColumn()
    user_id:number;

    @PrimaryColumn()
    society_id:number;

}