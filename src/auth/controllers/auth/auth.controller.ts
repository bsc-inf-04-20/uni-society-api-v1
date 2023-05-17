import { Controller,Request } from '@nestjs/common';
import { Body, Post, UseGuards } from '@nestjs/common/decorators';
import { loginDto } from 'src/auth/loginDto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../../services/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/utils/local-auth.guard';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('auth')
export class AuthController {

    constructor(
       private  UsersService:UsersService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req, @Body() loginDto:loginDto):any {
          return req.user;

    }
}
