import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
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
import { ViteMailModule } from 'vitemail';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { Comment } from './typeorm/entities/comment';
import { CommentsModule } from './comments/comments.module';
import { User_event } from './events/user_event';
import { UserEvents} from './typeorm/entities/user_to_Events';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
    type:'mysql',
    host: 'sql7.freesqldatabase.com' ,
    port:3306,
    username:'sql7627925',
    password:'Xe6QgvfhIi',
    database:'sql7627925',
    entities:[User, Society, Event, User_Society, Request, Post, Patrone, Event, postToSociety, Society_Leader, SocietyToEvent, Comment, UserEvents],
    synchronize: false, 
    autoLoadEntities: true
  }), UsersModule, SocietiesModule, EventsModule, PostModule, PatroneModule, SocietyLeaderModule, 
  ViteMailModule.authProvider({
    email:'tupomojoo@gmail.com',
    password:'pyypyjqekfeumemj'
  }), MailModule, CommentsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
