import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { updateUserDto } from './../../dtos/updateUser.dto';
import { createUserDto, createUserSchema } from './../../dtos/createUser.dto';
import { UsersService } from './../../services/users/users.service';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { LoggingInterceptor } from 'src/users/interceptors/logging/logging.interceptor';
import { createRequestDto } from './../../dtos/createRequest.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';


@Controller('users')
@ApiTags('User')
export class UsersController {

    constructor(private UsersService: UsersService){}


    @ApiOperation({summary:'get all users'})
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Get()
    getUsers(){
        return this.UsersService.findUsers();
    }

    @ApiOperation({summary:'get user by id'})
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
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
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Patch(':id')
    async updateUSer(
    @Param('id', ParseIntPipe) id:number, 
    @Body() updateUserDto: updateUserDto){
        await this.UsersService.updateUser(id, updateUserDto)
   }

   @ApiOperation({summary:'delete user'})
   @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id:number){
        return this.UsersService.deleteUser(id)
    }

    @ApiOperation({summary:'create user requests'})
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Post(':id/requests')
    createUserRequest(@Param('id', ParseIntPipe) id:number,@Body() createRequestDto:createRequestDto){
        return this.UsersService.createUserRequest(id, createRequestDto);
    }

    @ApiOperation({summary:'get user requests'})
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Get(':id/requests')
    getUserRequests(@Param('id',ParseIntPipe) id:number){
        return this.UsersService.getUserRequest(id);
    }

    @ApiOperation({summary:'get user\'s societies'})
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Get(':userId/societies')
    getUserSocieties(@Param('userId',ParseIntPipe) userId:number){
        return this.UsersService.getSocieties(userId);
    }

    @ApiOperation({summary:'exit society'})
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Delete(':userId/societies/:societyId')
    exitSociety(@Param('userId',ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe) societyId:number){
        return this.UsersService.exitSociety(userId,societyId);
    }

    @ApiOperation({summary:'accepting user to society'})
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Post(':userId/societies/:societyId')
    addToSociety(@Param('userId',ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe) societyId:number){
        return this.UsersService.addToSociety(userId,societyId);
    }


}