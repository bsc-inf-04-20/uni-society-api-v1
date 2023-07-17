import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { createSocietyDto } from 'src/societies/dtos/createSociety.dto';
import { SocietiesService } from 'src/societies/services/societies/societies.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';


@ApiTags('Society') 
@UseGuards(AuthGuard)
@ApiBearerAuth('JWT-auth') 
@Controller('societies')
export class SocietiesController {
    constructor(private SocietiesService: SocietiesService){}

@ApiOperation({summary:'get registered societies'})
@Get()
findAll(){
    return this.SocietiesService.getSocieties();
}

@ApiOperation({summary:'get societies by id'})
@Get(':id')
findSociety(@Param('id', ParseIntPipe) id:number){
    return this.SocietiesService.getSociety(id); 
}

@ApiOperation({summary:'create society'})
@Post()
createSociety(@Body() createSocietyDto:createSocietyDto){
  return this.SocietiesService.createSociety(createSocietyDto);
}

@ApiOperation({summary:'edit society info'})
@Patch(':id')
editSociety(
    @Body() updateSocietyDto:createSocietyDto,
    @Param('id', ParseIntPipe) id:number
){

    return this.SocietiesService.editSociety(id, updateSocietyDto);

}

@ApiOperation({summary:'unregistered society'})
@Delete(':id')
deleteSociety(
    @Param('id', ParseIntPipe) id:number
){
   return this.SocietiesService.deleteSociety(id);
}

@ApiOperation({summary:'get society requests'})
@Get(':id/requests')
getSocietyRequest(
  @Param('id',ParseIntPipe) id:number
){
  return this.SocietiesService.getRequests(id);
}

@ApiOperation({summary:'get society members'})
@Get(':societyId/members')
getSocietyMembers(
  @Param('societyId', ParseIntPipe) societyId:number
){
  return this.SocietiesService.findMembers(societyId);
}

}
