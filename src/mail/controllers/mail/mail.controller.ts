import { Controller, Param, Post, ParseIntPipe, Body, UseGuards } from '@nestjs/common';
import { MailService } from 'src/mail/service/mail/mail.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MailCreationDto } from 'src/mail/MailcreationDto';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';

@ApiTags('mail')
@UseGuards(AuthGuard)
@ApiBearerAuth('JWT-auth')
@Controller('mail')
export class MailController {
constructor (private mailService:MailService){}

@ApiOperation({summary:'sending email'})
@Post('senders/:senderUserId/receivers/:receiverUserId')
sendMail(@Param('senderUserId', ParseIntPipe) senderUserId:number, @Param('receiverUserId', ParseIntPipe) receiverUserId:number, @Body() MailCreationDto:MailCreationDto){
    return this.mailService.sendEmail(senderUserId,receiverUserId,MailCreationDto);
}

}
