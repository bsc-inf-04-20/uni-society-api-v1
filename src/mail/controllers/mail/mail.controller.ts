import { Controller, Param, Post, ParseIntPipe, Body } from '@nestjs/common';
import { MailService } from 'src/mail/service/mail/mail.service';
import { ApiTags } from '@nestjs/swagger';
import { MailCreationDto } from 'src/mail/MailcreationDto';

@ApiTags('mail')
@Controller('mail')
export class MailController {
constructor (private mailService:MailService){}

@Post('senders/:senderUserId/receivers/:receiverUserId')
sendMail(@Param('senderUserId', ParseIntPipe) senderUserId:number, @Param('receiverUserId', ParseIntPipe) receiverUserId:number, @Body() MailCreationDto:MailCreationDto){
    return this.mailService.sendEmail(senderUserId,receiverUserId,MailCreationDto);
}

}
