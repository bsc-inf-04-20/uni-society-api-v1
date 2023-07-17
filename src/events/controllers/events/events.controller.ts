import { Controller, Param, Post, ParseIntPipe, Body, Delete, Patch, UseGuards, Get } from '@nestjs/common';
import { EventsService } from 'src/events/services/events/events.service';
import { createEventDto } from './../../createEvent.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';

@ApiTags('events')
@UseGuards(AuthGuard)
@ApiBearerAuth('JWT-auth')
@Controller()
export class EventsController {

    constructor(
        private eventService:EventsService
    ){}

@ApiOperation({summary:'getting all events'})
@Get('events')
 getEvents(){
    return this.eventService.getEvents();
}

@ApiOperation({summary:'creating event'})
@Post('societies/:societyId/events')
createEvent(@Param('societyId', ParseIntPipe) societyId:number, @Body() createEventDto:createEventDto){
   return this.eventService.createEvent(societyId, createEventDto);
}

@ApiOperation({summary:'deleting event'})
@Delete('societies/:societyId/events/:eventId')
deleteEvent(@Param('eventId', ParseIntPipe) eventId:number){
    return this.eventService.deleteEvent(eventId);
}

@ApiOperation({summary:'editing event'})
@Patch('societies/:societyId/events/:eventId')
 editEvent(@Param('eventId', ParseIntPipe) eventId:number, @Body() updateEventDetails:createEventDto){
    return this.eventService.updateEvent(eventId, updateEventDetails);
 }

 @ApiOperation({summary:'joining an event'})
 @Post('users/:userId/events/:eventId')
  joinEvent(@Param('eventId', ParseIntPipe) eventId:number, @Param('userId', ParseIntPipe) userId:number){
    return this.eventService.joinEvent(userId, eventId);
  }

  @ApiOperation({summary:'get event byId'})
  @Get('events/:eventId')
   async getEvent(@Param('eventId', ParseIntPipe) eventId:number){
    return await this.eventService.getEvent(eventId);
   }

   @ApiOperation({summary:'get event participants'}) 
   @Get('event/:eventId/users')
    getEventMembers(@Param('eventId', ParseIntPipe) eventId:number){
        return this.eventService.getMembers(eventId);
    }


}
