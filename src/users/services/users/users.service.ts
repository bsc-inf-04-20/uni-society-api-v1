import { HttpException, HttpStatus, Injectable, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';
import { createUserParams, updateUserParams } from 'src/utils/params';
import { createRequestDto } from './../../dtos/createRequest.dto';
import { Request } from 'src/typeorm/entities/Requests';
import { User_Society } from 'src/typeorm/entities/User_Society';
import { ConfigService } from '@nestjs/config';
import { get } from 'http';



@Injectable()
export class UsersService {
    constructor(
         
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Request) private requestRepository: Repository<Request>,
        @InjectRepository(User_Society) private userToSocietyRepository: Repository<User_Society>,
        private readonly entityManager:EntityManager
    ){}

 findUsers(){

       return this.userRepository.find();
    }

async findUserByEmailAdress(email:string){
   return await this.userRepository.findOneBy({email});
}

 async findUser(id:number){

    const user=await this.userRepository.findOneBy({id});
    if(user){
         return user;}
     else{
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'cannot find the user',
          }, 403);
    }
       
      }


 createUser(userDetails:createUserParams){
        const newUser=this.userRepository.create({...userDetails});

        return this.userRepository.save(newUser);
    }

 updateUser(id:number, updateUserParams: updateUserParams){

    const thisUser=this.userRepository.findBy({id});

    if(thisUser){
     return this.userRepository.update({id},{...updateUserParams});
    }
    else{
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'cannot find the user',
          }, 403);
      }
    }

 deleteUser(id:number){
        return this.userRepository.delete({id});
    }

async createUserRequest(id:number, userRequestDetails:createRequestDto){

    const quary=`select society_id from society where society_name='${userRequestDetails.society_name}' limit 1;`;

    const result=await this.entityManager.query(quary);

    const quary2=`insert into request(user_id, society_id) values(${id},${result[0].society_id});`;

    const result2=await this.entityManager.query(quary2);

    return result2;
}

 async getUserRequest(user_id:number){
    
    const quary=`select society_name from society inner join request on society.society_id=request.society_id where user_id=${user_id} `;

    const result=await this.entityManager.query(quary);

    return result;
 }

 async getSocieties(userId:number){

    const quary=`select society_name from user_society inner join society on user_society.society_id=society.society_id where user_society.user_id=${userId};`;

    return this.entityManager.query(quary);

 }

 async exitSociety(userId:number, societyId:number){

    const outGoingMember=await this.userToSocietyRepository.findOneBy({society_id:societyId, user_id:userId})
   
    return this.userToSocietyRepository.remove(outGoingMember);

 }

 async addToSociety(userId:number,societyId:number){

    //removing the users pending request request
  const request= await this.requestRepository.findOneBy({society_id:societyId, user_id:userId})

  if(request){
   await this.requestRepository.remove(request);

   //adding the user to a society
  const newMember= await this.userToSocietyRepository.create({society_id:societyId, user_id:userId})

  return await this.userToSocietyRepository.save(newMember);
  }
else{
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'cannot find the user request',
          }, 403);
  }
 }

}
