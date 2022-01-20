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
    @Body() user: User
    )  {
    return await this.userService.createUser(user)
  }
}
