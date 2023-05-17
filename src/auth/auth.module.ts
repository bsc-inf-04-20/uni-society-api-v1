import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from 'src/typeorm/entities/Requests';
import { User } from 'src/typeorm/entities/user';
import { User_Society } from 'src/typeorm/entities/User_Society';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './utils/local.strategy';


@Module({
  imports:[TypeOrmModule.forFeature([User,Request,User_Society]), PassportModule],
  controllers: [AuthController],
  providers: [AuthService, UsersService, LocalStrategy]
})
export class AuthModule {}
