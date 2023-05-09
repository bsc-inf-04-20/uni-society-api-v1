import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './../../services/users/users.service';
import { UsersController } from './users.controller';



describe('UsersController', () => {
  let usersController: UsersController;
  let usersService:UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      
      controllers: [UsersController],
      providers:[UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersController = module.get<UsersController>(UsersController);
  });

  describe('findAll', () => {
    it('should return an array of Users', async () => {
      const result = 'returning all users';
      jest.spyOn(usersService, 'findAll').mockImplementation(() =>result);

      expect(await usersController.findAll).toBe(result);
    });
  });
});
