import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity({name:'user_to_event', schema:'public' })
export class User_Event {

    @PrimaryColumn()
    user_id:number;
    
    @PrimaryColumn()
    event_id:number;

    @ManyToOne(type=>User)
    @JoinColumn({referencedColumnName:"id", name :"user_id"})
    user:User;

    @ManyToOne(type=>Event)
    @JoinColumn({referencedColumnName: "event_", name:"event_id" })
    event: Event;

}