import { Test, TestingModule } from '@nestjs/testing';
import { PatroneController } from './patrone.controller';

describe('PatroneController', () => {
  let controller: PatroneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatroneController],
    }).compile();

    controller = module.get<PatroneController>(PatroneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
