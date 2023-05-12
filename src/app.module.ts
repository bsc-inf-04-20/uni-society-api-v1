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
import { Post } from './typeorm/entities/Post';
import { Patrone } from './typeorm/entities/Patrone';
import { PostModule } from './post/post.module';
import { postToSociety } from './typeorm/entities/post_to_society';
import { PatroneModule } from './patrone/patrone.module';
import { SocietyLeaderModule } from './society-leader/society-leader.module';
import { Society_Leader } from './typeorm/entities/SocietyLeader';
import { SocietyToEvent } from './typeorm/entities/society_to_event';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'uni_society',
    entities:[User, Society, Event, User_Society, Request, Post, Patrone, Event, postToSociety, Society_Leader, SocietyToEvent],
    synchronize:true, 
    autoLoadEntities: true
  }), UsersModule, SocietiesModule, EventsModule, PostModule, PatroneModule, SocietyLeaderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
