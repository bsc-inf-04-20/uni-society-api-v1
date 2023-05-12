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

    createPatrone(userId:number,createPatroneDetails:createPatroneDto){
       const query=`insert into patrone(user_id, society_id) values(${userId},${createPatroneDetails.society_id});`;

       return this.entityManager.query(query);
    }




}
