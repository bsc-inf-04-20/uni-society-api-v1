import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { loginDto } from './Dtos/loginDetails.dto';
import { AuthGuard } from './guards/auth/auth.guard';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDetails:loginDto) {
    return this.authService.signIn(loginDetails.email, loginDetails.password);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @Post('logout')
  logOut(){

  }
}
