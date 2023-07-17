import { Controller, Param, Post, ParseIntPipe, Body, Get, UseGuards, Delete } from '@nestjs/common';
import { PatroneService } from 'src/patrone/service/patrone/patrone.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { createPatroneDto } from 'src/patrone/dtos/createPatrone.dto';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';

@ApiTags('patrone')
@UseGuards(AuthGuard)
@ApiBearerAuth('JWT-auth')
@Controller('patrones')
export class PatroneController {
    constructor(private PatroneService: PatroneService){}

    @ApiOperation({summary:'patrone registering'})
    @Post('patrone/:userId')
    createPatrone(@Param('userId', ParseIntPipe) userId:number, @Body() createPatroneDto:createPatroneDto){

        return this.PatroneService.createPatrone(userId,createPatroneDto);

    }

    @ApiOperation({summary:'get patrone\'s society posts'})
    @Get('patrones/:userId/posts')
    getPatrone(@Param('userId', ParseIntPipe) userId:number){

        return this.PatroneService.getPosts(userId);

    }

    @ApiOperation({summary:'unregister patrone'})
    @Delete('patrone/:userId')
    removePatrone(@Param('userId', ParseIntPipe) userId:number){
        return this.PatroneService.removePatrone(userId);
    }

}
