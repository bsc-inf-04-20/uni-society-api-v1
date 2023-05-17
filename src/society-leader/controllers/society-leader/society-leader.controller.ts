import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SocietyLeaderService } from './../../services/society-leader/society-leader.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';

@ApiTags('leader')
@Controller('society-leader')
@UseGuards(AuthenticatedGuard)
export class SocietyLeaderController {
    constructor(private SocietyLeaderService: SocietyLeaderService){}

    @Get(':userId/societies')
     getLeadingSocietie(@Param('userId', ParseIntPipe) userId:number){
       return this.SocietyLeaderService.getLeadingSocieties(userId);
     }
    

}
