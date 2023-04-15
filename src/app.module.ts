import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './entities/user';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'uni_society',
    entities:[User],
    synchronize:true
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
