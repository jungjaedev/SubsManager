import { Body, Controller, Get, Post } from '@nestjs/common';
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
  async createUser(
    @Body('account') account: string,
    @Body('title') title: string,
    @Body('password') password: string,
    @Body('categoryId') categoryId: number,
    @Body('currencyId') currencyId: number,
    ): Promise<User> {
    console.log(account, title, password);
    return this.userService.createUser(
      account, title, password, categoryId, currencyId
      // 5,
    );
  }
}
