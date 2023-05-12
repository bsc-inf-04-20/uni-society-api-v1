import { Test, TestingModule } from '@nestjs/testing';
import { PatroneService } from './patrone.service';

describe('PatroneService', () => {
  let service: PatroneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatroneService],
    }).compile();

    service = module.get<PatroneService>(PatroneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
