import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { createSocietyDto } from 'src/societies/dtos/createSociety.dto';
import { SocietiesService } from 'src/societies/services/societies/societies.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Society')
@Controller('societies')
export class SocietiesController {
    constructor(private SocietiesService: SocietiesService){}

@Get()
findAll(){
    return this.SocietiesService.getSocieties();
}

@Get(':id')
findSociety(@Param('id', ParseIntPipe) id:number){
    return this.SocietiesService.getSociety(id); 
}

@Post()
createSociety(@Body() createSocietyDto:createSocietyDto){
  return this.SocietiesService.createSociety(createSocietyDto);
}

@Patch(':id')
editSociety(
    @Body() updateSocietyDto:createSocietyDto,
    @Param('id', ParseIntPipe) id:number
){

    return this.SocietiesService.editSociety(id, updateSocietyDto);

}

@Delete(':id')
deleteSociety(
    @Param('id', ParseIntPipe) id:number
){
   return this.SocietiesService.deleteSociety(id);
}

@Get(':id/requests')
getSocietyRequest(
  @Param('id',ParseIntPipe) id:number
){
  return this.SocietiesService.getRequests(id);
}

}