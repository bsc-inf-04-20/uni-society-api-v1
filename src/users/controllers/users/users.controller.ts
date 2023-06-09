import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { updateUserDto } from './../../dtos/updateUser.dto';
import { createUserDto, createUserSchema } from './../../dtos/createUser.dto';
import { UsersService } from './../../services/users/users.service';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { LoggingInterceptor } from 'src/users/interceptors/logging/logging.interceptor';
import { createRequestDto } from './../../dtos/createRequest.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';

@Controller('users')

@ApiTags('User')
export class UsersController {

    constructor(private UsersService: UsersService){}


    @ApiOperation({summary:'get all users'})
    @UseGuards(AuthenticatedGuard)
    @Get()
    getUsers(){
        return this.UsersService.findUsers();
    }

    @ApiOperation({summary:'get user by id'})
    @Get(':id')
    getuser(@Param('id', ParseIntPipe) id:number){
        return this.UsersService.findUser(id);
    }

    @ApiOperation({summary:'create user'})
    @Post()
    @UsePipes(new ValidateCreateUserPipe(createUserSchema))
    async createUser(@Body( new ValidationPipe()) createUserDto: createUserDto){
        return this.UsersService.createUser(createUserDto);
    }

    @ApiOperation({summary:'update a user'})
    @UseGuards(AuthenticatedGuard)
    @Patch(':id')
    async updateUSer(
    @Param('id', ParseIntPipe) id:number, 
    @Body() updateUserDto: updateUserDto){
        await this.UsersService.updateUser(id, updateUserDto)
   }

   @ApiOperation({summary:'delete user'})
   @UseGuards(AuthenticatedGuard)
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id:number){
        return this.UsersService.deleteUser(id)
    }

    @ApiOperation({summary:'create user requests'})
    @UseGuards(AuthenticatedGuard)
    @Post(':id/requests')
    createUserRequest(@Param('id', ParseIntPipe) id:number,@Body() createRequestDto:createRequestDto){
        return this.UsersService.createUserRequest(id, createRequestDto);
    }

    @ApiOperation({summary:'get user requests'})
    @UseGuards(AuthenticatedGuard)
    @Get(':id/requests')
    getUserRequests(@Param('id',ParseIntPipe) id:number){
        return this.UsersService.getUserRequest(id);
    }

    @ApiOperation({summary:'get user\'s societies'})
    @UseGuards(AuthenticatedGuard)
    @Get(':userId/societies')
    getUserSocieties(@Param('userId',ParseIntPipe) userId:number){
        return this.UsersService.getSocieties(userId);
    }

    @ApiOperation({summary:'exit society'})
    @UseGuards(AuthenticatedGuard)
    @Delete(':userId/societies/:societyId')
    exitSociety(@Param('userId',ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe) societyId:number){
        return this.UsersService.exitSociety(userId,societyId);
    }

    @ApiOperation({summary:'accepting user to society'})
    @UseGuards(AuthenticatedGuard)
    @Post(':userId/societies/:societyId')
    addToSociety(@Param('userId',ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe) societyId:number){
        return this.UsersService.addToSociety(userId,societyId);
    }


}