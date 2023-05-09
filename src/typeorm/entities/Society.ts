import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm";

@Entity({name: 'society'})
export class Society{
    @PrimaryGeneratedColumn()
    Society_id: number;

    @Column()
    society_name: string;

    @Column()
    society_description:string;
}