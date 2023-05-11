import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './typeorm/entities/user';
import { UsersModule } from './users/users.module';
import { SocietiesModule } from './societies/societies.module';
import { Society } from './typeorm/entities/Society';
import { EventsModule } from './events/events.module';
import { Event } from './typeorm/entities/Event';
import { User_Society } from './typeorm/entities/User_Society';
import { Request } from './typeorm/entities/Requests';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'uni_society',
    entities:[User, Society, Event, User_Society, Request],
    synchronize:true, 
    autoLoadEntities: true
  }), UsersModule, SocietiesModule, EventsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
