import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { updateUserDto } from './../../dtos/updateUser.dto';
import { createUserDto, createUserSchema } from './../../dtos/createUser.dto';
import { UsersService } from './../../services/users/users.service';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { LoggingInterceptor } from 'src/users/interceptors/logging/logging.interceptor';
import { createRequestDto } from './../../dtos/createRequest.dto';
import { ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';

@Controller('users')
@UseInterceptors(LoggingInterceptor)
@ApiTags('User')
export class UsersController {

    constructor(private UsersService: UsersService){}

  
    @Get()
    findAll(){
        return this.UsersService.findUsers();
    }


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
    async createUser(@Body( new ValidationPipe()) createUserDto: createUserDto){
        return this.UsersService.createUser(createUserDto);
    }

    @UseGuards(AuthenticatedGuard)
    @Patch(':id')
    async updateUSer(
    @Param('id', ParseIntPipe) id:number, 
    @Body() updateUserDto: updateUserDto){
        await this.UsersService.updateUser(id, updateUserDto)
   }

   @UseGuards(AuthenticatedGuard)
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id:number){
        return this.UsersService.deleteUser(id)
    }

    @UseGuards(AuthenticatedGuard)
    @Post(':id/requests')
    createUserRequest(@Param('id', ParseIntPipe) id:number,@Body() createRequestDto:createRequestDto){
        return this.UsersService.createUserRequest(id, createRequestDto);
    }

    @UseGuards(AuthenticatedGuard)
    @Get(':id/requests')
    getUserRequests(@Param('id',ParseIntPipe) id:number){
        return this.UsersService.getUserRequest(id);
    }

    @UseGuards(AuthenticatedGuard)
    @Get(':userId/societies')
    getUserSocieties(@Param('userId',ParseIntPipe) userId:number){
        return this.UsersService.getSocieties(userId);
    }

    @UseGuards(AuthenticatedGuard)
    @Delete(':userId/societies/:societyId')
    exitSociety(@Param('userId',ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe) societyId:number){
        return this.UsersService.exitSociety(userId,societyId);
    }

    @UseGuards(AuthenticatedGuard)
    @Post(':userId/societies/:societyId')
    addToSociety(@Param('userId',ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe) societyId:number){
        return this.UsersService.addToSociety(userId,societyId);
    }


}