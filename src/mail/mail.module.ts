import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { MailController } from './controllers/mail/mail.controller';
import { MailService } from './service/mail/mail.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}
