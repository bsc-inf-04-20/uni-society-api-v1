import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { User_to_Event } from 'src/typeorm/entities/user_to_Events';
import { EventsController } from './controllers/events/events.controller';
import { EventsService } from './services/events/events.service';


@Module({
  imports: [TypeOrmModule.forFeature([Event, User_to_Event])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
