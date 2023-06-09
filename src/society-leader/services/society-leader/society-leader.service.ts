import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Society_Leader } from 'src/typeorm/entities/SocietyLeader';

@Injectable()
export class SocietyLeaderService {

    constructor(
     private entityManager:EntityManager,
     @InjectRepository(Society_Leader) private societyLeaderRepositoty:Repository<Society_Leader>,
    ){}

    async getLeadingSocieties(userId:number){
      const query1=`select society_name from society_leader inner join society on society_leader.society_id=society.society_id where society_leader.user_id=${userId};`;
      return await this.entityManager.query(query1);
    }

    async setSocietyLeader(userId:number, societyId:number){

     const newLeader=await this.societyLeaderRepositoty.create({user_id:userId, society_id:societyId});

     return await this.societyLeaderRepositoty.save(newLeader);
    }

    async deleteSocietyLeader(societyId:number,userId:number){

      return await this.societyLeaderRepositoty.delete({society_id:societyId, user_id:userId});

    }


}
