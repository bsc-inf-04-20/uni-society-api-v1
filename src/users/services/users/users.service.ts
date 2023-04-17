import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/user';
import { createUserParams } from 'src/utils/params';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    findUsers(){
       return this.userRepository.find();
    }

    createUser(userDetails:createUserParams){
        const newUser=this.userRepository.create({...userDetails});

        return this.userRepository.save(newUser);
    }

}
