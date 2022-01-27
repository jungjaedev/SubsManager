import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}

  // @Get()
  // findAll(): string {
  //   return 'This action returns all user!!';
  // }


  @Post('signup')
  async createUser(
    @Body() user: User
    )  {
    return await this.user.createUser(user)
  }

  // @Post('signin')
  // async authenticateUser(
  //   @Body() user: User
  //   )  {
  //   return await this.user.authenticateUser(user)
  // }
}
