import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createPatroneDto } from 'src/patrone/dtos/createPatrone.dto';
import { Patrone } from 'src/typeorm/entities/Patrone';
import { EntityManager, Repository } from 'typeorm';


@Injectable()
export class PatroneService {
    constructor(
        @InjectRepository(Patrone) private patroneRepository: Repository<Patrone>,
        private entityManager:EntityManager
    ){}

    async createPatrone(userId:number,createPatroneDetails:createPatroneDto){

      const query0=`select society_id from society where society_name='${createPatroneDetails.society_name}';`;

       const result=await this.entityManager.query(query0);

       const society_id=result[0].society_id;

       const query=`insert into patrone(user_id, society_id) values(${userId},${society_id});`;

       return this.entityManager.query(query);
    }

    getPosts(userId:number){
        const query=`select details from user`
    }




}
