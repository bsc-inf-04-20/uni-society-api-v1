import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ) {}

    async signIn(email: string, pass: string): Promise<any> {
      const user = await this.usersService.findUserByEmailAdress(email);
      if (user?.password !== pass) {
        throw new UnauthorizedException();
      }
     
      const payload = { sub: user.id, username: user.username };
      return {
         access_token: await this.jwtService.signAsync(payload),
         id:user.id
       };
    }
}
