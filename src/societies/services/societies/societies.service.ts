import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'src/typeorm/entities/Requests';
import { Society } from 'src/typeorm/entities/Society';
import { Repository } from 'typeorm';

@Injectable()
export class SocietiesService {

    constructor(
        @InjectRepository(Society) private societyRepository: Repository<Society>,
        @InjectRepository(Request) private requestRepository: Repository<Request>

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

createSociety(){

}

editUser(){

}

deleteUser(){

}



}
