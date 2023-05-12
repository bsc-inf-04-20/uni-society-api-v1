import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class SocietyLeaderService {

    constructor(
     private entityManager:EntityManager
    ){}

    async getLeadingSocieties(userId:number){

      const query1=`select society_name from society_leader inner join society on society_leader.society_id=society.society_id where society_leader.user_id=${userId};`;

      return await this.entityManager.query(query1);
    }


}
