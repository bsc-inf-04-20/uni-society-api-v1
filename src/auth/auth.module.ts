import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from 'src/typeorm/entities/Requests';
import { User } from 'src/typeorm/entities/User';
import { User_Society } from 'src/typeorm/entities/User_Society';
import { UsersService } from 'src/users/services/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './utils/local.strategy';


@Module({
  imports:[TypeOrmModule.forFeature([User,Request,User_Society]), UsersModule, PassportModule.register({session:true})],
  controllers: [AuthController],
  providers: [AuthService, UsersService, LocalStrategy, SessionSerializer, JwtService],
  exports:[AuthService]
})
export class AuthModule {}
