import { Controller, Param, Post, ParseIntPipe, Body, Delete, Patch, UseGuards, Get } from '@nestjs/common';
import { EventsService } from 'src/events/services/events/events.service';
import { createEventDto } from './../../createEvent.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';

@ApiTags('events')
@Controller()
@UseGuards(AuthenticatedGuard)
export class EventsController {

    constructor(
        private eventService:EventsService
    ){}

@Get('events')
 getEvents(){
    return this.eventService.getEvents();
}

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

 @Post('users/:userId/events/:eventId')
  joinEvent(@Param('eventId', ParseIntPipe) eventId:number, @Param('userId', ParseIntPipe) userId:number){
    return this.eventService.joinEvent(userId, eventId);
  }

  @Get('events/:eventId')
   async getEvent(@Param('eventId', ParseIntPipe) eventId:number){
    return await this.eventService.getEvent(eventId);
   }

   @Get('event/:eventId/users')
    getEventMembers(@Param('eventId', ParseIntPipe) eventId:number){
        return this.eventService.getMembers(eventId);
    }


}
