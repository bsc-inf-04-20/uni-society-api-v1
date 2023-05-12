import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SocietyLeaderService } from './../../services/society-leader/society-leader.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('leader')
@Controller('society-leader')
export class SocietyLeaderController {
    constructor(private SocietyLeaderService: SocietyLeaderService){}

    @Get(':userId/societies')
     getLeadingSocietie(@Param('userId', ParseIntPipe) userId:number){
       return this.SocietyLeaderService.getLeadingSocieties(userId);
     }
    

}
