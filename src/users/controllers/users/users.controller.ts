import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes } from '@nestjs/common';
import { updateUserDto } from './../../dtos/updateUser.dto';
import { createUserDto, createUserSchema } from './../../dtos/createUser.dto';
import { UsersService } from './../../services/users/users.service';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {

    constructor(private UsersService: UsersService){}

@Get()
getUsers(){
    return this.UsersService.findUsers();
}

@Get(':id')
   getuser(@Param('id', ParseIntPipe) id:number){
     return this.UsersService.findUser(id);
    }


@Post()
@UsePipes(new ValidateCreateUserPipe(createUserSchema))
async createUser(@Body() createUserDto: createUserDto){
    return this.UsersService.createUser(createUserDto);
}

@Patch(':id')
async updateUSer(
@Param('id', ParseIntPipe) id:number, 
@Body() updateUserDto: updateUserDto){
await this.UsersService.updateUser(id, updateUserDto)
   }

@Delete(':id')
deleteUser(@Param('id', ParseIntPipe) id:number){
return this.UsersService.deleteUser(id)
}

}