import { Controller, Param, Post, ParseIntPipe, Body, Delete, Patch } from '@nestjs/common';
import { EventsService } from 'src/events/services/events/events.service';
import { createEventDto } from './../../createEvent.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('events')
@Controller()
export class EventsController {

    constructor(
        private eventService:EventsService
    ){}

@Post('societies/:societyId/events')
createEvent(@Param('societyId', ParseIntPipe) societyId:number, @Body() createEventDto:createEventDto){
   return this.eventService.createEvent(societyId, createEventDto);
}

@Delete('societies/:societyId/events/:eventId')
deleteEvent(@Param('eventId', ParseIntPipe) eventId:number){
    return this.eventService.deleteEvent(eventId);
}

@Patch('societies/:societyId/events/:eventId')
 editEvent(@Param('eventId', ParseIntPipe) eventId:number, @Body() updateEventDetails:createEventDto){
    return this.eventService.updateEvent(eventId, updateEventDetails);
 }

}
