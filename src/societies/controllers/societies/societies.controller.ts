import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SocietiesService } from 'src/societies/services/societies/societies.service';

@Controller('societies')
export class SocietiesController {
    constructor(private SocietiesService: SocietiesService){}

@Get()
findAll(){
    
}

@Get(':id')
findSociety(@Param('id', ParseIntPipe) id:number){
    return this.SocietiesService.getSociety(id); 
}

@Post()
createSociety(){

}

@Patch(':id')
editUser(){

}

@Delete(':id')
deleteUser(){

}

}
