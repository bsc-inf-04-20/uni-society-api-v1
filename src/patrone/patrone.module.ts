import { Module } from '@nestjs/common';
import { PatroneController } from './controllers/patrone/patrone.controller';
import { PatroneService } from './service/patrone/patrone.service';
import { Patrone } from 'src/typeorm/entities/Patrone';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Patrone])],
  providers: [PatroneService],
  controllers: [PatroneController]
})
export class PatroneModule {}
