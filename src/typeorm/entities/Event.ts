import { Entity, PrimaryGeneratedColumn, Column, Repository, OneToOne, JoinColumn } from "typeorm";
import { Society } from "./Society";

@Entity({name: 'event'})
export class Event{
    @PrimaryGeneratedColumn()
    event_id: number;

    @Column()
    event_name: string;

    @Column()
    event_description:string;

    @Column()
    event_location:string;

    @Column()
    event_date:Date;

    @OneToOne(type => Society)
    @JoinColumn({referencedColumnName: "society_id", name:"society_id" })
    society: Society;
   
}