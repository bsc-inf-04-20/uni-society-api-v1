import { Body, Controller, Post, Param, ParseIntPipe, Get, UseGuards, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostService } from './../../services/post/post.service';
import { createPostDto} from './../../createPost.dto';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';


@ApiTags('post')
@UseGuards(AuthGuard)
@ApiBearerAuth('JWT-auth')
@Controller()
export class PostController {

    constructor(private PostsService: PostService){}

@ApiOperation({summary:'create a post'})
@Post('users/:userId/societies/:societyId/posts')
  createPost(@Param('userId', ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe ) societyId:number, @Body() createpostDto:createPostDto){
    return this.PostsService.createpost(userId,societyId,createpostDto);
  }

@ApiOperation({summary:'get society posts'})
@Get('societies/:societyId/posts')
   getPosts(@Param('societyId', ParseIntPipe ) societyId:number){
      return this.PostsService.getposts(societyId);
   }

@ApiOperation({summary:'deleting society post'})
@Delete('societies/posts/:postId')
  removePost(@Param('postId', ParseIntPipe) postId:number){
    this.PostsService.removePost(postId);
  }

}
