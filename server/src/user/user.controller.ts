import { Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // findAll(): string {
  //   return 'This action returns all user!!';
  // }

  // @Post()
  // async createUser(): Promise<User> {
  //   return this.userService.createUser(
  //     'accounttest',
  //     'email@test.com',
  //     'qwerqwer',
  //     4,
  //     5,
  //   );
  // }
}
