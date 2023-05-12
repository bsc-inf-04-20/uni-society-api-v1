import { Module } from '@nestjs/common';
import { SocietyLeaderService } from './services/society-leader/society-leader.service';
import { SocietyLeaderController } from './controllers/society-leader/society-leader.controller';
import { Society_Leader } from 'src/typeorm/entities/SocietyLeader';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Society_Leader])],
  providers: [SocietyLeaderService],
  controllers: [SocietyLeaderController]
})
export class SocietyLeaderModule {}
