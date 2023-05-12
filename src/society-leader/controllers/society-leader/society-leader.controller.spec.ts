import { Test, TestingModule } from '@nestjs/testing';
import { SocietyLeaderController } from './society-leader.controller';

describe('SocietyLeaderController', () => {
  let controller: SocietyLeaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocietyLeaderController],
    }).compile();

    controller = module.get<SocietyLeaderController>(SocietyLeaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
