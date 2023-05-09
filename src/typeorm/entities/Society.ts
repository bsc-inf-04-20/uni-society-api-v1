import { Entity, PrimaryGeneratedColumn, Column, Repository, OneToMany } from "typeorm";
import { Event } from "./Event";

@Entity({name: 'society'})
export class Society{
    @PrimaryGeneratedColumn()
    society_id: number;

    @Column()
    society_name: string;

    @Column()
    focus : string;

    @Column()
    society_description:string;

    @OneToMany(type => Event, event => event.society)
    events: Event[];
}