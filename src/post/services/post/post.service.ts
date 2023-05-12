import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { EntityManager, Repository } from 'typeorm';
import { createPostDto } from './../../createPost.dto';
import { postToSociety } from './../../../typeorm/entities/post_to_society';
import { Society } from 'src/typeorm/entities/Society';

@Injectable()
export class PostService {

    constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(postToSociety) private postTosociety:Repository<postToSociety>,
    @InjectRepository(Society) private societyRepository:Repository<Society>,
    private readonly entityManager:EntityManager
    ){}

    async createpost(userId:number,societyId:number, createpostDetails:createPostDto){
    
        const quary1=`insert into post(details, society_id, user_id) values('${createpostDetails.details}',${societyId},${userId})`

        const result1=await this.entityManager.query(quary1); 

        const postidQuery=`select @@identity as last_insert`;

        //getting the most recent insert id which will be the post_id
        const postIDcmd=await this.entityManager.query(postidQuery);

        const postID=postIDcmd[0].last_insert;
        //adding post id to the post_to_society_relation
        const quary2=`insert into post_to_society(society_id, post_id) values(${societyId},${postID})`

        const result2=await this.entityManager.query(quary2);

        //if any extra societies to receive the post have to choosen they should be linked to the post in the post to society table
        if(createpostDetails.audienceSocieties.length>0 ){

            for(let i=0;i<createpostDetails.audienceSocieties.length;i++){
                const societyidQuery=`select society_id from society where society_name='${createpostDetails.audienceSocieties[i]}';`;

                const societyID=await this.entityManager.query(societyidQuery);

                console.log(societyID[0].society_id);

                const quary3=`insert into post_to_society(society_id, post_id) values(${societyID[0].society_id}, ${postID});`;

                const result3=await this.entityManager.query(quary3);

            }
        }

    }

    async getposts(societyId:number){
        const fetchrequestQuery=`select details from post inner join post_to_society on post.post_id=post_to_society.post_id where post_to_society.society_id=${societyId};`;

        const queryCmd=await this.entityManager.query(fetchrequestQuery);

        return queryCmd;
    }




}
