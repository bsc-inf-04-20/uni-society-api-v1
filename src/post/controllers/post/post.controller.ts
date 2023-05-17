import { Body, Controller, Post, Param, ParseIntPipe, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostService } from './../../services/post/post.service';
import { createPostDto} from './../../createPost.dto';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';

@ApiTags('post')
@UseGuards(AuthenticatedGuard)
@Controller()
export class PostController {

    constructor(private PostsService: PostService){}

@Post('users/:userId/societies/:societyId/posts')
  createPost(@Param('userId', ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe ) societyId:number, @Body() createpostDto:createPostDto){
    return this.PostsService.createpost(userId,societyId,createpostDto);
  }

@Get('societies/:societyId/posts')
   getPosts(@Param('societyId', ParseIntPipe ) societyId:number){
      return this.PostsService.getposts(societyId);
   }

  

}
