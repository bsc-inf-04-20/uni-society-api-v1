import { Controller, Param, Post, ParseIntPipe, Body, Patch, Get, UseGuards } from '@nestjs/common';
import { CommentsService } from './../../services/comments/comments.service';
import { createCommentDto } from './../../comments.Dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';

@ApiTags('comments')
@UseGuards(AuthGuard)
@ApiBearerAuth('JWT-auth')
@Controller()
export class CommentsController {

    constructor(
        private CommentsService:CommentsService,
    ){}

    @ApiOperation({summary:'creating a comment to a post'})
    @Post('users/:userId/societies/:societyId/posts/:postId/comments')
     createComment(@Param('postId', ParseIntPipe) postId:number,@Param('userId', ParseIntPipe) userId:number, @Body() createCommentDto:createCommentDto){
       return  this.CommentsService.createComment(postId, userId,createCommentDto)
     }

     @ApiOperation({summary:'editing a comment topost'})
     @Patch('users/:userId/post/:postId/comments')
     updateComment(@Param('postId', ParseIntPipe) postId:number,@Param('userId', ParseIntPipe) userId:number, @Body() createCommentDto:createCommentDto){
       return  this.CommentsService.updateComment(postId, userId,createCommentDto)
     }

     @ApiOperation({summary:'getting a post\'s comments'})
     @Get('posts/:postId')
      getPosts(@Param('postId', ParseIntPipe) postId:number){
       return this.CommentsService.getComments(postId);
      }
}
