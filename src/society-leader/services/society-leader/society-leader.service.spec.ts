import { Test, TestingModule } from '@nestjs/testing';
import { SocietyLeaderService } from './society-leader.service';

describe('SocietyLeaderService', () => {
  let service: SocietyLeaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocietyLeaderService],
    }).compile();

    service = module.get<SocietyLeaderService>(SocietyLeaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
