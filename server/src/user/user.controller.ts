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

  @Post('signup')
  async createUser(data): Promise<User> {
    console.log(data)
    return this.userService.createUser(
      'accounttest',
      'email@test.com',
      'qwerqwer',
      // 5,
    );
  }
}
