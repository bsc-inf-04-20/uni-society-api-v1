import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from 'src/typeorm/entities/Requests';
import { User } from 'src/typeorm/entities/User';
import { User_Society } from 'src/typeorm/entities/User_Society';
import { UsersService } from 'src/users/services/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Module({
  imports:[UsersModule,
    TypeOrmModule.forFeature([User, Request, User_Society]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,UsersService],
  exports:[AuthService]
})
export class AuthModule {}
