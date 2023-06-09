import { Controller, Param, Post, ParseIntPipe, Body, Get, UseGuards, Delete } from '@nestjs/common';
import { PatroneService } from 'src/patrone/service/patrone/patrone.service';
import { ApiTags } from '@nestjs/swagger';
import { createPatroneDto } from 'src/patrone/dtos/createPatrone.dto';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';

@ApiTags('patrone')
@Controller('patrones')
@UseGuards(AuthenticatedGuard)
export class PatroneController {
    constructor(private PatroneService: PatroneService){}


    @Post('patrone/:userId')
    createPatrone(@Param('userId', ParseIntPipe) userId:number, @Body() createPatroneDto:createPatroneDto){

        return this.PatroneService.createPatrone(userId,createPatroneDto);

    }

    @Get('patrones/:userId/posts')
    getPatrone(@Param('userId', ParseIntPipe) userId:number){

        return this.PatroneService.getPosts(userId);

    }

    @Delete('patrone/:userId')
    removePatrone(@Param('userId', ParseIntPipe) userId:number){
        return this.PatroneService.removePatrone(userId);
    }

}
