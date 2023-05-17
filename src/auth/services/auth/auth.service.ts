import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './../../../users/services/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
       private UsersService:UsersService,
       private jwtService:JwtService
    ){}
    async validateUser(email:string,password:string): Promise<any>{

        const user=await this.UsersService.findUserByEmailAdress(email)

        if(user && user.password===password){

            const {password, email, ...rest}=user;

             return rest;
        }
         return null;
    }


}
