import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm";

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
}