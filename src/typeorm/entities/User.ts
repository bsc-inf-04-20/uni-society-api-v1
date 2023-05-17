import { Entity, PrimaryGeneratedColumn, Column, Repository, OneToMany } from "typeorm";
import { Request } from "./Requests";

@Entity({name: 'user'})
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password: string;

    @Column()
    yearOfStudy: number;

    @OneToMany((type)=>Request, request=>request.user)
    requests:Request[];
}
