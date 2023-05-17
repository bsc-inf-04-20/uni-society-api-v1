import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { Repository } from 'typeorm';
import { ViteMailService } from 'vitemail';
import { MailCreationDto } from './../../MailcreationDto';

@Injectable()
export class MailService {
    constructor (
        private vitemailService:ViteMailService,
        @InjectRepository(User) private userRepository:Repository<User>
        ){}

    async sendEmail(senderUseId:number,receiverUserId:number, createMailDetails:MailCreationDto){
       
        const sender=await this.userRepository.findOneBy({id:senderUseId});

        const receiver=await this.userRepository.findOneBy({id:receiverUserId});
       
        const response=await this.vitemailService.sendEmail({
            sender:{
                email:sender.email,
                name:sender.name,
            },
            receiver:{
                email:receiver.email,
                name:receiver.name,
            },
            message:createMailDetails.message,
            subject:createMailDetails.subject,
            replyTo:createMailDetails.replyTo,
            cc:createMailDetails.cc
        });
    }
}
