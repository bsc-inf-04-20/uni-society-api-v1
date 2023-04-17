import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { updateUserDto } from './../../dtos/updateUser.dto';
import { createUserDto } from './../../dtos/createUser.dto';
import { UsersService } from './../../services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService){}

@Get()
getUsers(){
    return this.UsersService.findUsers();
}

@Post()
createUser(@Body() createUserDto: createUserDto){
    
    return this.UsersService.createUser(createUserDto);
}

@Patch(':id')
updateUSer(
@Param('id', ParseIntPipe) id:number, @Body() updateUserDto: updateUserDto){
return this.UsersService.updateUser(id, updateUserDto)
   }

}