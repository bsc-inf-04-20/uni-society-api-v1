import { Controller, Param, Post, ParseIntPipe, Body, Patch, Get, UseGuards } from '@nestjs/common';
import { CommentsService } from './../../services/comments/comments.service';
import { createCommentDto } from './../../comments.Dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';

@ApiTags('comments')
@UseGuards(AuthenticatedGuard)
@Controller()
export class CommentsController {

    constructor(
        private CommentsService:CommentsService,
    ){}


    @Post('users/:userId/societies/:societyId/posts/:postId/comments')
     createComment(@Param('postId', ParseIntPipe) postId:number,@Param('userId', ParseIntPipe) userId:number, @Body() createCommentDto:createCommentDto){
       return  this.CommentsService.createComment(postId, userId,createCommentDto)
     }

     @Patch('users/:userId/post/:postId/comments')
     updateComment(@Param('postId', ParseIntPipe) postId:number,@Param('userId', ParseIntPipe) userId:number, @Body() createCommentDto:createCommentDto){
       return  this.CommentsService.updateComment(postId, userId,createCommentDto)
     }

     @Get('posts/:postId')
      getPosts(@Param('postId', ParseIntPipe) postId:number){
       return this.CommentsService.getComments(postId);
      }
}
