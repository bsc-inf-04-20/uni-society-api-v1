import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from 'src/typeorm/entities/Requests';
import { Society } from 'src/typeorm/entities/Society';
import { SocietiesController } from './controllers/societies/societies.controller';
import { SocietiesService } from './services/societies/societies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Society, Request])],
  controllers: [SocietiesController],
  providers: [SocietiesService]
})
export class SocietiesModule {}
