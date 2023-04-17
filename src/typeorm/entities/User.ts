import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm";

@Entity({name: 'User'})
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    yearOfStudy: number;
}