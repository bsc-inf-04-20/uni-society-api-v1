import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/typeorm/entities/comment';
import { Post } from 'src/typeorm/entities/Post';
import { Society } from 'src/typeorm/entities/Society';
import { User } from 'src/typeorm/entities/User';
import { Repository, EntityManager } from 'typeorm';
import { createCommentDto } from './../../comments.Dto';

@Injectable()
export class CommentsService {
 constructor(
     @InjectRepository(Comment) private commentsRepository:Repository<Comment>,
     @InjectRepository(Post) private postsRepository:Repository<Post>,
     @InjectRepository(User) private userRepository:Repository<User>,
     private entityManager:EntityManager
 ){}

 async createComment(post_id:number,id:number,createCommentDto:createCommentDto){

    try{
       const post=await this.postsRepository.findOneBy({post_id})
           }catch(error){
             throw new HttpException({
            status:HttpStatus.NOT_FOUND,
            error:'this post does not exist'
            }, HttpStatus.NOT_FOUND, {
            cause:error
          })}
        //getting the user
        let user=null;
        try{
         user=await this.userRepository.findOneBy({id})
          }catch(error){
                throw new HttpException({
                    status:HttpStatus.NOT_FOUND,
                    error:'this user does not exist'
                }, HttpStatus.NOT_FOUND, {
                    cause:error
                })}

        const newComment={
            content:createCommentDto.content,
             post_id:post_id, 
             username:user.username
            };

      const newSavedComment=await this.commentsRepository.create({...newComment});
    
      return await this.commentsRepository.save(newSavedComment);
 }

 async updateComment(comment_id:number, id:number,createCommentDto:createCommentDto){
         //getting the user
         let user=null;
         try{
          user=await this.userRepository.findOneBy({id})
           }catch(error){
                 throw new HttpException({
                     status:HttpStatus.NOT_FOUND,
                     error:'this user does not exist'
                 }, HttpStatus.NOT_FOUND, {
                     cause:error
                 })}
 
         const newComment={
             content:createCommentDto.content,
             };

             return this.commentsRepository.update({comment_id},{...newComment});
 }

 async getComments(post_id:number){

  const query=`select * from comment where post_id=${post_id}`;

  return await this.entityManager.query(query);

 }
      


}
