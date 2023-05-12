import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { EntityManager, Repository } from 'typeorm';
import { createEventDto } from './../../createEvent.dto';



@Injectable()
export class EventsService {
constructor(
     @InjectRepository(Event) private eventRepository:Repository<Event>,
      private entityManager:EntityManager
){}

async createEvent(societyId:number,createEventDetails:createEventDto){

 const query=`insert into event(event_name,event_description,event_location,event_date, society_id) values('${createEventDetails.event_name}', '${createEventDetails.event_description}', '${createEventDetails.event_location}', '${createEventDetails.event_date}', ${societyId});`;
    
 return this.entityManager.query(query);
}

async deleteEvent(event_id:number){

    const query=`delete from event where event_id=${event_id};`;

    return await this.entityManager.query(query);

}

async updateEvent(event_id:number, updateEventDetails:createEventDto ){
     
    return await this.eventRepository.update({event_id},{...updateEventDetails})

}

}