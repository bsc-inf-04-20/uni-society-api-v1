import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments/comments.controller';
import { CommentsService } from './services/comments/comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/typeorm/entities/comment';
import { Post } from 'src/typeorm/entities/Post';
import { User } from 'src/typeorm/entities/User';


@Module({
  imports:[TypeOrmModule.forFeature([Comment, Post, User])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
