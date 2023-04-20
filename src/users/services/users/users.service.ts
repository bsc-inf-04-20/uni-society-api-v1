import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/user';
import { createUserParams, updateUserParams } from 'src/utils/params';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    findUsers(){
       return this.userRepository.find();
    }

      async findUser(id:number){
         const user=await this.userRepository.findOneBy({id});
         
         return user
      }


    createUser(userDetails:createUserParams){
        const newUser=this.userRepository.create({...userDetails});

        return this.userRepository.save(newUser);
    }

    updateUser(id:number, updateUserParams: updateUserParams){
     return this.userRepository.update({id},{...updateUserParams});
    }

    deleteUser(id:number){
        return this.userRepository.delete({id});
    }

}
