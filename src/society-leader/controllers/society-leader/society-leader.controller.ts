import { Controller, Get, Param, ParseIntPipe, Post, UseGuards, Delete } from '@nestjs/common';
import { SocietyLeaderService } from './../../services/society-leader/society-leader.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';

@ApiTags('leader')
@Controller('society-leader')
@UseGuards(AuthenticatedGuard)
export class SocietyLeaderController {
    constructor(private SocietyLeaderService: SocietyLeaderService){}

    @ApiOperation({summary:'get all societies you lead in'})
    @Get(':userId/societies')
     getLeadingSocietie(@Param('userId', ParseIntPipe) userId:number){
       return this.SocietyLeaderService.getLeadingSocieties(userId);
     }

     @ApiOperation({summary:'create society leader'})
     @Post(':userId/societies/:societyId')
     setSocietyLeader(@Param('userId', ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe) societyId:number){
      return this.SocietyLeaderService.setSocietyLeader(userId, societyId);
     }

     @ApiOperation({summary:'remove society leader'})
     @Delete(':userId/societies/:societyId')
     removeSocietyLeader(@Param('userId', ParseIntPipe) userId:number, @Param('societyId', ParseIntPipe) societyId:number ){
      return this.SocietyLeaderService.deleteSocietyLeader(societyId, userId);
     }

}
