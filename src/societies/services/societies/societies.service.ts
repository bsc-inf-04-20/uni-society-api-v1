import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'src/typeorm/entities/Requests';
import { Society } from 'src/typeorm/entities/Society';
import { createSocietyparams, createUserParams } from 'src/utils/params';
import { EntityManager, Repository } from 'typeorm';
import { createSocietyDto } from './../../dtos/createSociety.dto';

@Injectable()
export class SocietiesService {

    constructor(
        @InjectRepository(Society) private societyRepository: Repository<Society>,
        @InjectRepository(Request) private requestRepository: Repository<Request>,
        private readonly entityManager:EntityManager

    ){}

getSocieties(){

    return this.societyRepository.find();

}

async getSociety(society_id:number){

    const society=await this.societyRepository.findOneBy({society_id});
    if(society){
         return society;}
     else{
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'cannot find the society',
          }, 403);
    }
       
      }

async createSociety(createSocietyDetails:createSocietyparams){

    let newSociety=await this.societyRepository.create({...createSocietyDetails});

     return await this.societyRepository.save(newSociety)

}

async editUser(society_id:number, updateSocietyDetails:createSocietyparams){

    const society=await this.societyRepository.findOneBy({society_id});
    if(society){
        return this.societyRepository.update({society_id},{...updateSocietyDetails});
        }
    else{
       throw new HttpException({
           status: HttpStatus.FORBIDDEN,
           error: 'cannot find the society',
         }, 403);
   } 

}

async deleteUser(society_id:number){

    const society=await this.societyRepository.findOneBy({society_id});
    if(society){
         return this.societyRepository.delete({society_id})
        }
     else{
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'cannot find the society',
          }, 403);
    }

}

async getRequests(society_id:number){

      const quary=`select username from user inner join request on user.id=request.user_id where society_id=${society_id} `;

      const result=await this.entityManager.query(quary);

      return result;
}



}
