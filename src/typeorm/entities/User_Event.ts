import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Event } from "./Event";
import { User } from "./User";


@Entity({name:'user_Society', schema:'public' })
export class UserEvent {

    @PrimaryColumn()
    user_id:number;
    
    @PrimaryColumn()
    event_id:number;

    @ManyToOne(type=>User)
    @JoinColumn({referencedColumnName:"id", name :"user_id"})
    user:User;

    @ManyToOne(type=>Event)
    @JoinColumn({referencedColumnName: "event_id", name:"event_id" })
    event: Event;

}