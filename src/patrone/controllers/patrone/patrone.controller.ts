import { Controller, Param, Post, ParseIntPipe, Body, Get } from '@nestjs/common';
import { PatroneService } from 'src/patrone/service/patrone/patrone.service';
import { ApiTags } from '@nestjs/swagger';
import { createPatroneDto } from 'src/patrone/dtos/createPatrone.dto';

@ApiTags('patrone')
@Controller('patrones')
export class PatroneController {
    constructor(private PatroneService: PatroneService){}


    @Post(':userId')
    createPatrone(@Param('userId', ParseIntPipe) userId:number, @Body() createPatroneDto:createPatroneDto){

        return this.PatroneService.createPatrone(userId,createPatroneDto);

    }

    @Get(':userId/posts')
    getPatrone(@Param('userId', ParseIntPipe) userId:number){

        return this.PatroneService.getPosts(userId);

    }

}
