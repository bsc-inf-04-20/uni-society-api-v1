import { HttpException, HttpStatus, Injectable, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/user';
import { createUserParams, updateUserParams } from 'src/utils/params';
import { createRequestDto } from './../../dtos/createRequest.dto';
import { Request } from 'src/typeorm/entities/Requests';



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private readonly entityManager:EntityManager
    ){}

 findUsers(){
       return this.userRepository.find();
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

}
