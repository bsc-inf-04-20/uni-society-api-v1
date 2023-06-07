import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { User } from 'src/typeorm/entities/User';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { Request } from 'src/typeorm/entities/Requests';
import { User_Society } from 'src/typeorm/entities/User_Society';


@Module({
  imports: [TypeOrmModule.forFeature([User, Request, User_Society])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UsersController);
  }
}
