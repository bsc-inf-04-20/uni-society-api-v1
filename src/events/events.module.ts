import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { User_Event } from 'src/typeorm/entities/userEvent';
import { EventsController } from './controllers/events/events.controller';
import { EventsService } from './services/events/events.service';
import { User_event } from './user_event';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User_Event])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
