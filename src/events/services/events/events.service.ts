import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { User_to_Event } from 'src/typeorm/entities/user_to_Events';
import { EntityManager, Repository } from 'typeorm';
import { createEventDto } from './../../createEvent.dto';
import { User_event } from './../../user_event';




@Injectable()
export class EventsService {
constructor(
     @InjectRepository(Event) private eventRepository:Repository<Event>,
     @InjectRepository(User_to_Event) private userEventRepository:Repository<User_to_Event>,
      private entityManager:EntityManager
){}

async createEvent(societyId:number,createEventDetails:createEventDto){

 const query=`insert into event(event_name,event_description,event_location,event_date, society_id) values('${createEventDetails.event_name}', '${createEventDetails.event_description}', '${createEventDetails.event_location}', '${createEventDetails.event_date}', ${societyId});`;
    
 return this.entityManager.query(query);
}

getEvents(){
    return this.eventRepository.find();
}

async deleteEvent(event_id:number){

    const query=`delete from event where event_id=${event_id};`;

    return await this.entityManager.query(query);

}

async updateEvent(event_id:number, updateEventDetails:createEventDto ){
     
    return await this.eventRepository.update({event_id},{...updateEventDetails})

}

   joinEvent(userId:number, eventId:number){

    const entry={user_id:userId, event_id:eventId}

    const newUserEvent= this.userEventRepository.create({...entry});

    return this.userEventRepository.save(newUserEvent);
   }

   async getEvent(event_id:number){
    return await this.eventRepository.findOneBy({event_id});
   }

   async getMembers(event_id:number){

    const query=`select * from user inner join user_event on user.id=user_event.user_id;`
     
    return await this.entityManager.query(query);
   }


}