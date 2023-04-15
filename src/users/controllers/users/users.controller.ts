import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './../../dtos/createUser.dto';
import { UsersService } from './../../services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private UsersService:UsersService){}

@Get()
getUsers(){}

@Post()
createUser(@Body() createUserDto: createUserDto){
    
    this.UsersService.createUser(createUserDto);
}

}
