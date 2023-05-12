import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { postToSociety } from 'src/typeorm/entities/post_to_society';
import { Society } from 'src/typeorm/entities/Society';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post,postToSociety, Society])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
