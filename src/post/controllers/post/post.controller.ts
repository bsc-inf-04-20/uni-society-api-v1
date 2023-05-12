import { Body, Controller, Post, Param, ParseIntPipe, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostService } from './../../services/post/post.service';
import { createPostDto} from './../../createPost.dto';

@ApiTags('post')
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
