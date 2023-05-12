import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Event } from "./Event";
import { Society } from "./Society";


@Entity({name:'society_to_event'})
export class SocietyToEvent{

@PrimaryColumn()
event_id:number;

@PrimaryColumn()
society_id:number;

@ManyToOne(type=>Event)
@JoinColumn({referencedColumnName:'event_id', name:'event_id'})
event:Event;

@ManyToOne(type=>Society)
@JoinColumn({referencedColumnName:'society_id', name:'society_id'})
society:Society;

}