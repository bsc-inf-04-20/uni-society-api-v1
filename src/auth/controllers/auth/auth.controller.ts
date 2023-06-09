import { Controller,Request } from '@nestjs/common';
import { Body, Get, Post, UseGuards } from '@nestjs/common/decorators';
import { loginDto } from 'src/auth/loginDto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../../services/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/utils/local-auth.guard';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';
import { get } from 'http';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentification(START WITH THIS ENDPOINT BEFORE ANY OTHER)')
@Controller('auth')
export class AuthController {

    constructor(
       private  UsersService:UsersService,
    ){}

    @ApiOperation({summary:'login'})
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req, @Body() loginDto:loginDto):any {
          return 'logged in!';
    }

    @UseGuards(AuthenticatedGuard)
    @Get('protected')
    getHello(@Request() req): string{
        return req.user
    }

}
