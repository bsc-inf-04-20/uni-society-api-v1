import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { User } from 'src/typeorm/entities/user';


@Module({
  imports: [TypeOrmModule.forFeature([User]),
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'uni_society',
    entities:[User],
    synchronize:true
  }), UsersModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
