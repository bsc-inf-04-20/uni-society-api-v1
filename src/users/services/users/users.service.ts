import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/user';
import { createUserParams, updateUserParams } from 'src/utils/params';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private readonly entityManager:EntityManager
    ){}

findAll(){
    return 'returning all users';
}

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

 async getUserRequest(user_id:number){
    
    const quary=`select  society_name from user inner join request on society.society_id=request.society_id where user_id=${user_id} `;

    const result=await this.entityManager.query(quary);

    return result;
 }

}
